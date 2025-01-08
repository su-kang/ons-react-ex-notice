import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/Header';
import NoticeRegist from '../components/regist/NoticeRegist';
import { onCreate } from '../utils/localStorageUtil';

const Regist = () => {
	const navigate = useNavigate();

	const onSubmitEvent = (data: any) => {
		onCreate(data);
		navigate('/');
	};

	return (
		<>
			<Header title="게시글 등록" leftChild={<Button onClick={() => navigate(-1)} text={'< 뒤로 가기'} />} />
			<NoticeRegist onSubmit={onSubmitEvent} />
		</>
	);
};

export default Regist;
