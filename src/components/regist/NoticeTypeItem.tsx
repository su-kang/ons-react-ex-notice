import { ICON_LIST } from '../../utils/Constants';
import './NoticeTypeItem.css';

const NoticeTypeItem = ({ id, isSelected, onClick }: any) => {
	/**
	 * 아이콘 정보
	 * @param id
	 * @returns
	 */
	const selectIconInfo = (id: number) => {
		const info = ICON_LIST.find(list => {
			return list.id === id;
		});
		return info;
	};

	return (
		<div key={id} className={`titleItem ${isSelected ? 'titleItem_on' : ''}`} onClick={onClick}>
			<img className="item_img" src={selectIconInfo(id)?.icon} />
			<div className="item_name">{selectIconInfo(id)?.name}</div>
		</div>
	);
};

export default NoticeTypeItem;
