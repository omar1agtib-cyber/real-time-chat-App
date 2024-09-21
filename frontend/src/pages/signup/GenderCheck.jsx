const GenderCheck = ({ handeChangeGender, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-100">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs border-gray-100"
            checked={selectedGender === "male"}
            onChange={() => handeChangeGender("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text text-gray-100">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-xs border-gray-100"
            checked={selectedGender === "female"}
            onChange={() => handeChangeGender("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheck;
