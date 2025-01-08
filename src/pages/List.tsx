import { useNavigate } from 'react-router-dom';
import Button from '../components/button/Button';
import Header from '../components/Header';
import NoticeList from '../components/list/NoticeList';

const List = () => {
	const navigate = useNavigate();

	return (
		<>
			<Header
				title="게시판 샘플 리스트"
				rightChild={<Button onClick={() => navigate('/regist')} text={'새글 등록'} type="green" />}
			/>
			<NoticeList />
		</>
	);
};

export default List;
