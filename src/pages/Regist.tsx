import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/Header';
import NoticeRegist from '../components/regist/NoticeRegist';
import { useTitleContext } from '../hooks/TitleContextProvider';
import { onCreate } from '../utils/localStorageUtil';

const Regist = () => {
	const navigate = useNavigate();
	const { setTitle } = useTitleContext();

	/**
	 * 등록 이벤트
	 * @param data
	 */
	const onSubmitEvent = (data: any) => {
		onCreate(data);
		navigate('/');
	};

	useEffect(() => {
		setTitle('게시판 등록');
	}, []);

	return (
		<>
			<Header title="게시판 등록" leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />} />
			<NoticeRegist onSubmit={onSubmitEvent} />
		</>
	);
};

export default Regist;
