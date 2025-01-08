import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/Header';
import NoticeRegist from '../components/regist/NoticeRegist';

import { onDelete, onReadOne, onUpdate } from '../utils/localStorageUtil';

const Update = () => {
	const navigate = useNavigate();
	const params = useParams();

	const [noticeData, setNoticeData] = useState({});

	const onSubmitEvent = (data: any) => {
		onUpdate(data);
		navigate('/');
	};

	const onClickDelelte = () => {
		onDelete(params.id);
		navigate('/');
	};

	useEffect(() => {
		setNoticeData(onReadOne(params.id));
	}, []);

	return (
		<>
			<Header
				title="게시글 수정"
				leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
				rightChild={<Button onClick={onClickDelelte} text={'삭 제'} type="red" />}
			/>
			<NoticeRegist registData={noticeData} onSubmit={onSubmitEvent} />
		</>
	);
};

export default Update;
