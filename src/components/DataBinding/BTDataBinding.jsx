import React from "react";

const BTDataBinding = () => {
  const user = {
    name: "Ten",
    age: 99,
    school: "NTU",
    image: "https://i.pravatar.cc?img=68",
  };
  return (
    <div>
      {/*  hiển thị card có tên tuôi trường học,hình ảnh  */}
      <div className="card border-primary" style={{ width: "18rem" }}>
        <img className="card-img-top" src={user.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{user.name}</h4>
          <p className="card-text">{user.age} - {user.school}</p>
        </div>
      </div>
    </div>
  );
};

export default BTDataBinding;
