import { ICON_LIST } from '../../utils/Constants';
import './NoticeDetail.css';

const NoticeDetail = ({ detailData }: any) => {
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
		<div className="detail">
			<div className="detail_box">
				<h4>게시판 종류</h4>
				<div className="detail_type">
					<img className="item_img" src={selectIconInfo(detailData.typeId)?.icon} />
					<div className="item_name">{selectIconInfo(detailData.typeId)?.name}</div>
				</div>
			</div>
			<div className="detail_box">
				<h4>게시판 정보</h4>
				<div className="detail_info">
					<div className="box">
						<div className="box_key">제 목</div>
						<div className="box_value">{detailData.title}</div>
					</div>
					<div className="box">
						<div className="box_key">작 성 자</div>
						<div className="box_value">{detailData.createName}</div>
					</div>
					<div className="box">
						<div className="box_key">수 정 일</div>
						<div className="box_value">{detailData.updateDate}</div>
					</div>
				</div>
			</div>
			<div className="detail_box">
				<h4>게시판 본문</h4>
				<textarea id="content" name="content" placeholder="내용" value={detailData.content} readOnly />
			</div>
		</div>
	);
};

export default NoticeDetail;
