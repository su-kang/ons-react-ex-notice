import dateUtils from './dateUtils';

// localStorageUtils.js
export const localStorageUtils = {
	setItem: (key: string, value: any) => {
		try {
			const serializedValue = JSON.stringify(value);
			localStorage.setItem(key, serializedValue);
		} catch (error) {
			console.error('Error setting item in localStorage', error);
		}
	},

	getItem: (key: string) => {
		try {
			const serializedValue = localStorage.getItem(key);
			return serializedValue ? JSON.parse(serializedValue) : null;
		} catch (error) {
			console.error('Error getting item from localStorage', error);
			return null;
		}
	},

	removeItem: (key: string) => {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error('Error removing item from localStorage', error);
		}
	},

	clear: () => {
		try {
			localStorage.clear();
		} catch (error) {
			console.error('Error clearing localStorage', error);
		}
	},
};

/**
 * 등록
 * @param data
 */
export const onCreate = (data: any) => {
	try {
		const localData = localStorageUtils.getItem('data') === null ? [] : localStorageUtils.getItem('data');

		let maxId = 0;
		localData.forEach((element: any) => {
			if (element?.id > maxId) {
				maxId = element?.id;
			}
		});
		maxId++;

		let result: any = [];
		let chgData = {
			...data,
			// id: localData.length, // 유니크 키
			id: maxId, // 유니크 키
			updateDate: dateUtils.getToDay('YYYY-MM-DD HH:mm:ss'), // 날짜
		};
		if (localData === null) {
			result.push(chgData);
		} else {
			result = [...localData, chgData];
		}
		// 로컬 스토리지 변경
		localStorageUtils.setItem('data', result);
	} catch (error) {
		console.error('Error onCreate localStorage', error);
	}
};

/**
 * 조회
 * @param search
 * @returns
 */
export const onRead = (search: any) => {
	try {
		const localData = localStorageUtils.getItem('data') === null ? [] : localStorageUtils.getItem('data');
		const result = searchByKoreanKeyword(
			searchByKoreanKeyword(sortArray(localData, 'updateDate', search.order), 'title', search.title),
			'createName',
			search.createName,
		);

		return result;
	} catch (error) {
		console.error('Error onRead localStorage', error);
	}
	return;
};

/**
 * 단건 조회
 * @param search
 * @returns
 */
export const onReadOne = (id: any) => {
	try {
		const localData = localStorageUtils.getItem('data') === null ? [] : localStorageUtils.getItem('data');
		const result = localData.find((item: any) => {
			return item.id === Number(id);
		});
		return result;
	} catch (error) {
		console.error('Error onRead localStorage', error);
	}
	return;
};

/**
 * 변경
 * @param newData
 * @returns
 */
export const onUpdate = (newData: any) => {
	try {
		const localData = localStorageUtils.getItem('data') === null ? [] : localStorageUtils.getItem('data');
		let chgData = {
			...newData,
			updateDate: dateUtils.getToDay('YYYY-MM-DD HH:mm:ss'), // 날짜
		};
		const result = localData.map((item: any) => (item.id === chgData.id ? chgData : item));
		// 로컬 스토리지 변경
		localStorageUtils.setItem('data', result);
		return result;
	} catch (error) {
		console.error('Error onRead localStorage', error);
	}
	return;
};

/**
 * 삭제
 * @param id
 * @returns
 */
export const onDelete = (id: any) => {
	try {
		const localData = localStorageUtils.getItem('data') === null ? [] : localStorageUtils.getItem('data');
		const result = localData.filter((item: any) => {
			return item.id !== Number(id);
		});
		// 로컬 스토리지 변경
		localStorageUtils.setItem('data', result);
		return result;
	} catch (error) {
		console.error('Error onRead localStorage', error);
	}
	return;
};

// 배열 정렬 함수
function sortArray(arr: any, key: string, order = 'asc') {
	return arr.sort((a: any, b: any) => {
		if (a[key] < b[key]) {
			return order === 'asc' ? -1 : 1;
		}
		if (a[key] > b[key]) {
			return order === 'asc' ? 1 : -1;
		}
		return 0;
	});
}

// 한글 검색어가 포함된 객체를 찾는 함수
function searchByKoreanKeyword(arr: any, key: string, keyword: string) {
	const regex = new RegExp(keyword, 'i'); // 대소문자 구분 없이 검색
	return arr.filter((item: any) => regex.test(item[key]));
}
