import React from "react";

const EventHandler = () => {
  // hàm kh có tham số
  const handleClick = () => {
    alert("Bạn vừa click vào button!");
  };

  // hàm có tham số
  const handleClick2 = (name) => {
    alert(`Xin chào ${name}`);
  };

  //    hàm xử lý sự kiện onInput
  const handleInput = (event) => {
    console.log("👉 event", event);
    // event : đối tượng sự kiện, nó chứa thông tin về sự kiện vừa xảy ra
    // tương tự như document.getElementById('input').value trong js thuần
    // . target là lấy ra cáci tag html hiện tại đang thao tác
    console.log(event.target.value);
  
  };


  const handleBtnClick = (event) => {
    // nhận vào event khi click vào button
    // event: đối tượng sự kiện được thao tác
    // lấy ra text của button khi click vào
    
    console.log("👉 event", event);
    alert("Bạn vừa bấm vào button : " + event.target.innerText)


  }
  return (
    <div className="p-5">
      <button className="btn btn-info" onClick={handleClick}>
        Click me
      </button>

      {/* GỌI HÀM CÓ THAM SỐ CẦN BỌC TRONG ARROW FUNCTION */}
      <button
        className="btn btn-danger ms-3"
        onClick={() => {
          handleClick2("BC93");
        }}
      >
        Click me 2
      </button>

      <br />

      <input
        type="text"
        onChange={(e) => {
          handleInput(e);
        }}
      />
      {/*  event thứ 1 nó thuộc về event , sự kiện khi thao tác vào tag html
        event object */}
      {/*  gọi nhanh hàm handleInput */}
      <input type="text" onChange={handleInput} />



      <br />
      <br />
      <br />
      <h2>LUYỆN EVENT</h2>


      {/*  4 BUTTON , CLICK VÀO BUTTON SẼ ALERT RA TEXT CỦA BTN ĐÓ  */}
      {/*  INNERTEXT */}
        <button className="btn btn-danger" onClick={handleBtnClick}>Red</button>
        <button className="btn btn-primary ms-3" onClick={handleBtnClick}>Blue</button>
        <button className="btn btn-success ms-3" onClick={handleBtnClick}>Green</button>
        <button className="btn btn-warning ms-3" onClick={handleBtnClick}>Yellow</button>
    </div>
  );
};

export default EventHandler;
