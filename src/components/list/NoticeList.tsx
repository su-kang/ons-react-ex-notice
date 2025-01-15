import { useEffect, useState } from 'react';
import { onRead } from '../../utils/localStorageUtil';
import NoticeItem from './NoticeItem';
import './NoticeList.css';

const NoticeList = () => {
	const [noticeList, setNoticeList] = useState([]);
	const [searchParams, setSearchParams] = useState({
		order: 'desc',
		title: '',
		createName: '',
	});

	/**
	 * select box 변경 이벤트
	 * @param event
	 */
	const onChangeSelectEvent = (event: any) => {
		setSearchParams(prev => ({
			...prev,
			order: event.target.value,
		}));
		console.log('event', event.target.value);
	};

	/**
	 * input 변경 이벤트
	 * @param event
	 */
	const onChangeInputEvent = (event: any) => {
		let name = event.target.name;
		let value = event.target.value;
		setSearchParams(prev => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		setNoticeList(onRead(searchParams));
	}, [searchParams]);

	return (
		<div className="notice">
			<div className="menu_bar">
				<select name="searchOrder" onChange={onChangeSelectEvent}>
					<option value="desc">최신순</option>
					<option value="asc">오래된 순</option>
				</select>
				<input type="text" id="title" name="title" placeholder="제목 검색" onChange={onChangeInputEvent} />
				<input type="text" id="createName" name="createName" placeholder="작성자 검색" onChange={onChangeInputEvent} />
			</div>
			<div className="list_wrapper">
				{noticeList.map((data: any) => {
					return <NoticeItem key={data.id} item={data} />;
				})}
			</div>
		</div>
	);
};

export default NoticeList;
