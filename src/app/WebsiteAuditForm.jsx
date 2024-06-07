"use client";
import React, { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';
import { RiCloseLargeFill } from "react-icons/ri";

const WebsiteAuditForm = () => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);

  const soSubmit = (el) => {
    if (!soFormValidate(el.id)) {
      return false;
    }
    const behaviour = el.getAttribute("data-behaviour");
    const soBody = document.getElementsByTagName("body")[0];
    const soBodyOriginalStyleHeight = soBody.style.height;
    const soBodyOriginalStyleOverflow = soBody.style.overflow;
    const element = document.createElement("input");
    element.setAttribute("type", "hidden");
    element.setAttribute("name", "referrer");
    element.setAttribute("value", window.location.href);
    el.appendChild(element);
    if (behaviour === "new_tab") return true;
    if (behaviour === "modal") return soSubmitModal(el.id);
    if (behaviour === "be_in_touch") return soSubmitBeInTouch(el.id);
    if (behaviour === "redirect") return soSubmitRedirect(el.id);
  };

  const soFormValidate = (id) => {
    const domain = document.getElementById("so-domain");
    const email = document.getElementById("so-email" );
    const phone = document.getElementById("so-phone");
    const firstName = document.getElementById("so-first-name");
    console.log(domain.value.length + "poka");
    if (!domain.value.length) {
      alert(domain.getAttribute("data-validation"));
      return false;
    }
    domain.value = domain.value.trim().replace(/\/$/, "");
    if (
      !domain.value.match(
        /^(https?:\/\/)?[a-z\d\-]{1,62}\.[a-z\d\-]{1,62}(\.[a-z\d\-]{1,62})*$/i
      )
    ) {
      alert(domain.getAttribute("data-validation"));
      return false;
    }
    if (email && !email.value.length) {
      alert(email.getAttribute("data-validation"));
      return false;
    }
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email && !regex.test(email.value)) {
      alert(email.getAttribute("data-validation"));
      return false;
    }
    if (phone && !phone.value.length) {
      alert(phone.getAttribute("data-validation"));
      return false;
    }
    if (firstName && !firstName.value.length) {
      alert(firstName.getAttribute("data-validation"));
      return false;
    }

    setTimeout(() => {
      const form = document.getElementById(id);
    //   form.reset();
    }, 10);
    return true;
  };

  const soSubmitModal = (id) => {
    const modalWrapper = document.createElement("div");
    const button = document.getElementById("so-button" + id);
    let html =
      '<style type="text/css">\n' +
      "    @media (max-width:500px) { #so-widget-modal-content { width:100% !important; height:100% !important; margin-top:50px !important; } }\n" +
      "    @media (max-width:500px) and (max-height:550px) { #so-widget-modal-content { height:100% !important;} }\n" +
      "    @media (min-height:601px) and (max-height:750px) and (min-width:501px) { #so-widget-modal-content { margin-top:100px !important; } }\n" +
      "    @media (max-height:600px) and (min-width:501px) { #so-widget-modal-content { margin-top:80px !important; } }\n" +
      "    #iframe-wrapper {width: 100%;height: 100%;-webkit-overflow-scrolling: touch !important}\n" +
      "    #iframe-wrapper iframe {height: 100%;width: 100%;}\n" +
      "</style> \n" +
      '<div id="so-widget-modal-overlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); display:none; opacity:0; transition:opacity 0.3s ease;">\n' +
      '\t\t\t<div id="so-widget-modal-content" style="position:relative; width:80%; max-width: 1250px; height:80%; margin:120px auto 0; background:#fff;">\n' +
      '\t\t\t\t<div style="width:100%; height:50px; position:absolute; top:-50px; background:white;">\n' +
      '\t\t\t\t\t<span id="so-widget-modal-title" style="position:absolute; left:15px; top:15px; font-size:16px; font-weight:bold;"></span>\n';
    if (button) {
      const styles = window.getComputedStyle(
        document.getElementById("so-submit" + id)
      );
      html +=
        '\t\t\t\t\t<a href="' +
        button.value +
        '" id="so-widget-modal-button" style="display: inline-block;position: absolute;top: 3px;right: 0;margin-right: 50px;text-decoration: none;background-color: ' +
        styles.backgroundColor +
        ";border: 1px solid " +
        styles.backgroundColor +
        ";color: " +
        styles.color +
        ';border-radius: 3px;font-size: 19px;padding: 8px 50px;height: 27px;box-sizing: content-box;">' +
        button.getAttribute("title") +
        "</a>\n";
    }
    html +=
      '\t\t\t\t\t<span onclick="closeSoModal();" style="display:inline-block; width:16px; height:16px; position:absolute; top:15px; right:15px; cursor:pointer; background-image:url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAowAAAKMB8MeazgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB5SURBVDiNrZPRCcAwCEQfnUiySAZuF8kSWeH6Yz8KrQZMQAicJ+epAB0YwAmYJKIADLic0/GPPCbQAnLznCd/4NWUFfkgy1VjH8CryA95ApYltAiTRCZxpuoW+gz9WXE6NPeg+ra1UDIxGlWEObe4SGxY5fIxlc75Bkt9V4JS7KWJAAAAAElFTkSuQmCC59ef34356faa7edebc7ed5432ddb673d\'); opacity:0.6;"></span>\n' +
      "\t\t\t\t</div>\n" +
      '                <div id="iframe-wrapper">\n' +
      '\t\t\t\t    <iframe name="so-iframe" id="so-iframe" scrolling="yes" style="border:1px solid transparent; width:100%; height:100%; box-sizing:border-box;"></iframe>\n' +
      "\t\t\t    </div>\n" +
      "\t\t\t</div>\n" +
      "\t\t</div>";
    modalWrapper.setAttribute("style", "position:absolute; top:0; left:0; width:100%; z-index:9999999");
    modalWrapper.setAttribute("id", "so-modal-wrapper");
    modalWrapper.innerHTML = html;
    document.body.appendChild(modalWrapper);

    let isMobile = false;
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|os|t)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|[23]\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb|p\-)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|tmo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      isMobile = true;
    }
    const iframe = document.getElementById("so-iframe");
    iframe.src =
      "about:blank";
    setTimeout(function () {
      if (isMobile) {
        iframe.contentWindow.location.replace(
          "about:blank"
        );
      } else {
        iframe.contentWindow.location.href =
          "about:blank";
      }
    }, 500);
    modalWrapper.style.display = "block";
    setTimeout(function () {
      modalWrapper.style.opacity = 1;
    }, 20);
    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    soSubmit(event.target);
    setShowModal(false);
  };

  return (
    <>
       <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          marginTop: "50px",
        }}
      >
          <div className="modal-content">

        <div className="audit-form">
          <RiCloseLargeFill className='absolute top-2 right-5 cursor-pointer hover:bg-black hover:text-white rounded-full text-xl' onClick={() => setShowModal(false)} />

         <div id="so-titleso1717549071" className="text-2xl font-semibold text-black text-center mb-2">Audit Your Website's Performance.</div>
      <form
        id="auditForm"
        className="form-container"
        onSubmit={handleSubmit}
        data-behaviour="modal"
      >

        <label htmlFor="so-first-name">First Name:</label>
        <input
          type="text"
          id="so-first-name"
          name="firstName"
          placeholder="Enter first name"
          data-validation="Please enter your first name"
        />


        <label htmlFor="so-domain">Domain:</label>
        <input
          type="text"
          id="so-domain"
          name="domain"
          placeholder="Enter domain"
          data-validation="Please enter a valid domain"
        />

        <label htmlFor="so-email">Email:</label>
        <input
          type="email"
          id="so-email"
          name="email"
          placeholder="Enter email"
          data-validation="Please enter a valid email"
        />

        <label htmlFor="so-phone">Phone:</label>
        <input
          type="number"
          id="so-phone"
          name="phone"
          placeholder="Enter phone number"
          data-validation="Please enter a valid phone number"
        />

        <button type="submit" id="so-button" title="Submit">
          Submit
        </button>
      </form>
    </div>
    </div>
      </Modal>
    </>
   
  );
};

export default WebsiteAuditForm;
