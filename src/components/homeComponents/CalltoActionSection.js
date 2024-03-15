import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn cần chúng tôi tư vấn thêm?</h2>
              <p>Xác nhận Email để chúng tôi có thể tư vấn, hỗ trợ cụ thể cho bạn.</p>
              <form className="form-section">
                <input placeholder="Địa chỉ Email của bạn.........." name="email" type="email" />
                <input value="Xác nhận!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
