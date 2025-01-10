import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/Header';
import NoticeRegist from '../components/regist/NoticeRegist';

import { useTitleContext } from '../hooks/TitleContextProvider';
import { onDelete, onReadOne, onUpdate } from '../utils/localStorageUtil';

const Update = () => {
	const navigate = useNavigate();
	const params = useParams();

	const [noticeData, setNoticeData] = useState({});
	const { setTitle } = useTitleContext();

	const onSubmitEvent = (data: any) => {
		onUpdate(data);
		navigate('/');
	};

	const onClickDelelte = () => {
		if (confirm('게시글을 삭제하시겠습니까?')) {
			onDelete(params.id);
			navigate('/');
		}
	};

	useEffect(() => {
		setNoticeData(onReadOne(params.id));
		setTitle('게시판 수정');
	}, []);

	return (
		<>
			<Header
				title="게시판 수정"
				leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />}
				rightChild={<Button onClick={onClickDelelte} text={'삭 제'} type="red" />}
			/>
			<NoticeRegist registData={noticeData} onSubmit={onSubmitEvent} />
		</>
	);
};

export default Update;
