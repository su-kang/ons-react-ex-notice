import { useNavigate } from 'react-router-dom';
import { ICON_LIST } from '../../utils/Constants';
import Button from '../button/Button';
import './NoticeItem.css';

interface Props {
	item: any;
}

const NoticeItem = ({ item }: Props) => {
	const navigate = useNavigate();

	const selectIconInfo = () => {
		const info = ICON_LIST.find(list => {
			return list.id === item.typeId;
		});
		return info;
	};

	/**
	 * 상세 클릭 이벤트
	 */
	const onClickDetail = () => {
		navigate(`/detail?id=${item.id}`);
	};

	/**
	 * 수정 버튼 클릭 이벤트
	 */
	const onClickUpdate = () => {
		navigate(`/update/${item.id}`);
	};

	return (
		<div className="noticeItem">
			<div className="notice_info" onClick={onClickDetail}>
				<div className="img_section">
					<img src={selectIconInfo()?.icon} />
				</div>
				<div className="info_section">
					<div className="title">{item?.title}</div>
					<div className="subinfo">
						<div>작성자: {item?.createName}</div>
						<div>수정일: {item?.updateDate}</div>
					</div>
				</div>
			</div>
			<div className="button_section">
				<Button text={'수정하기'} type="blue" onClick={onClickUpdate} />
			</div>
		</div>
	);
};

export default NoticeItem;
