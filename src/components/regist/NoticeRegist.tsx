import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICON_LIST } from '../../utils/Constants';
import Button from '../button/Button';
import NoticeTypeItem from './NoticeTypeItem';

import './NoticeRegist.css';

const NoticeRegist = ({ registData, onSubmit }: any) => {
	const navigate = useNavigate();

	const [input, setInput] = useState({
		typeId: 1,
		title: '',
		createName: '',
		content: '',
		updateDate: '',
		id: 0,
	});

	/**
	 * 아이콘 종류 클릭 이벤트
	 * @param item
	 */
	const onClickItem = (item: any) => {
		// 데이터 변경
		setInput(prev => ({
			...prev,
			typeId: item.id,
		}));
	};

	/**
	 * input 변경 이벤트
	 * @param event
	 */
	const onChangeInput = (event: any) => {
		let name = event.target.name;
		let value = event.target.value;
		// 데이터 변경
		setInput(prev => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		if (registData !== undefined) {
			setInput(prev => ({
				...prev,
				...registData,
			}));
		}
	}, [registData]);

	return (
		<div className="regist">
			<div className="type">
				<h4>게시판 종류</h4>
				<section className="list_wrapper">
					{ICON_LIST.map((item: any) => {
						return (
							<NoticeTypeItem
								key={item.id}
								id={item.id}
								isSelected={item.id === input.typeId ? true : false}
								onClick={() => onClickItem(item)}
							/>
						);
					})}
				</section>
			</div>
			<div className="title_box">
				<h4>게시판 정보</h4>
				<div className="box">
					<label htmlFor="title">제 목</label>
					<input type="text" id="title" name="title" value={input.title} onChange={onChangeInput} />
				</div>
				<div className="box">
					<label htmlFor="createName">작 성 자</label>
					<input type="text" id="createName" name="createName" value={input.createName} onChange={onChangeInput} />
				</div>
			</div>
			<div className="content_box">
				<h4>게시판 본문</h4>
				<textarea
					id="content"
					name="content"
					value={input.content}
					onChange={onChangeInput}
					placeholder="본문을 입력해주세요"
				/>
			</div>
			<div className="button">
				<Button text="취소" onClick={() => navigate(-1)} />
				<Button text="등록" type="green" onClick={() => onSubmit(input)} />
			</div>
		</div>
	);
};

export default NoticeRegist;
