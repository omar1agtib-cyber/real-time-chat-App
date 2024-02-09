const GenderCheck = () => {
	return (
		<div className='flex'>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-gray-100'>Male</span>
					<input type="checkbox" className="checkbox checkbox-xs border-gray-100" />
				</label>
			</div>
			<div className='form-control'>
				<label className={`label gap-2 cursor-pointer`}>
					<span className='label-text text-gray-100'>Female</span>
					<input type="checkbox" className="checkbox checkbox-xs border-gray-100" />
				</label>
			</div>
		</div>
	);
};
export default GenderCheck;