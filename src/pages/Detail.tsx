import { useEffect, useState } from 'react';
import Button from '../components/button/Button';
import Header from '../components/Header';

import { useNavigate, useSearchParams } from 'react-router-dom';
import NoticeDetail from '../components/detail/NoticeDetail';
import { onReadOne } from '../utils/localStorageUtil';

const Detail = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const id = searchParams.get('id');

	const [noticeData, setNoticeData]: any = useState({});

	const onClickUpdate = () => {
		navigate(`/update/${id}`);
	};

	useEffect(() => {
		setNoticeData(onReadOne(id));
	}, []);

	return (
		<>
			<Header
				title={`[ ${noticeData.title} ] 상세`}
				leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
				rightChild={<Button onClick={onClickUpdate} text={'수정하기'} type="blue" />}
			/>
			<NoticeDetail detailData={noticeData} />
		</>
	);
};

export default Detail;
