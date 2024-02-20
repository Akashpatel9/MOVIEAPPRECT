function DropDown({ options ,fn, title}) {
  return (
    <div className="select-dropdown">
      <select className=" cursor-pointer uppercase" defaultValue={title} onChange={fn}>
        {options.map((o, idx) => (
          <option key={idx} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;
