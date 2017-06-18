import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LocalizedStrings from 'react-localization';
import request from 'request';

let strings = new LocalizedStrings({
 en:{
   title:"Spoons",
   description:"A new experience for healthy food aficionados.",
   name:"Name",
   email:"Email Address",
   phone:"Phone Number",
   signup:"Join us",
   signupTitle: "Sign up for beta access",
   signupDescription: "Be one of Spoons founding sellers",
   languageButton: "اللغة العربية",
   footer: "© Spoons.",
   learnmore: "Learn More",
   direction: "ltr",
   thankYou: 'Thank you',
   thankYouStatememnt: "We're lucky to have you on board"
 },
 ar: {
   title:"سپونز",
   description:".تجربه جديده لهواة الأكل الصحي",
   name:"الإسم",
   email:"البريد الإلكتروني",
   phone:"الهاتف",
   signup:"إنضم لنا",
   signupTitle: "إنضم لنا",
   signupDescription: "كن أحد االبائعين المؤسسين في سپونز",
   languageButton: "English ",
   footer: ".سپونز ©",
   learnmore: "لمعرفة المزيد",
   direction: "rtl",
   thankYou: 'شكراً لك',
   thankYouStatememnt: "نحن محظوظين بكونك معنا"
 }
});
let isArabic = strings.getLanguage() === 'en' ? false : true;

// const LanguageButton = (props) => {
//   return (
//      <button onClick={props.switchLanguage} className="button alt" style={{'position': 'absolute','top': '10px','right': '10px'}}>{strings.languageButton}</button>
//   );
// }

const Header = (props) => {
  return (
    <header id="header" className="alt">
      <h1><a href="index.html"><bold>Spoons</bold></a> by <img src="/assets/images/logo-light.png" height="100%" style={{'marginTop': '1px', 'marginBottom': '-20px'}} alt="Information Matters" className="logo"/></h1>
      <nav id="nav">
        <ul>
          <li><button onClick={props.switchLanguage} className="button alt" style={{'position': 'absolute','top': '10px','right': '10px'}}>{strings.languageButton}</button></li>
        </ul>
      </nav>
    </header>
  );
}

const Banner = (props) => {
  return (
    <section id="banner">
      <h2>{strings.title}</h2>
      <h3>{strings.description}</h3>
      <ul className="actions">
        {isArabic ? (<li><a href="#more" className="button">{strings.learnmore}</a></li>) : (<li><a href="#cta" className="button special">{strings.signup}</a></li>)}

      </ul>
    </section>
  );
}

const Main = () => {
  return (
    <section id="main" className="container">

      <section className="box special">
        <header className="major">
          <h2>Introducing the ultimate mobile app
          <br />
          for doing stuff with your phone</h2>
          <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
          adipiscing nunc adipiscing. Condimentum turpis massa.</p>
        </header>
        <span className="image featured"><img src="/assets/images/pic01.jpg" alt="" /></span>
      </section>

      <section className="box special features">
        <div className="features-row">
          <section>
            <span className="icon major fa-bolt accent2"></span>
            <h3>Magna etiam</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span className="icon major fa-area-chart accent3"></span>
            <h3>Ipsum dolor</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
        <div className="features-row">
          <section>
            <span className="icon major fa-cloud accent4"></span>
            <h3>Sed feugiat</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
          <section>
            <span className="icon major fa-lock accent5"></span>
            <h3>Enim phasellus</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
          </section>
        </div>
      </section>

      <div className="row">
        <div className="6u 12u(narrower)">

          <section className="box special">
            <span className="image featured"><img src="/assets/images/pic02.jpg" alt="" /></span>
            <h3>Sed lorem adipiscing</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            <ul className="actions">
              <li><a href="#more" className="button alt">Learn More</a></li>
            </ul>
          </section>

        </div>
        <div className="6u 12u(narrower)">

          <section className="box special">
            <span className="image featured"><img src="/assets/images/pic03.jpg" alt="" /></span>
            <h3>Accumsan integer</h3>
            <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            <ul className="actions">
              <li><a href="#more" className="button alt">Learn More</a></li>
            </ul>
          </section>

        </div>
      </div>

    </section>
  );
}

// const CallToAction = () => {
//   return (
//     <section id="cta">
//
//       <h2>{strings.signup.title}</h2>
//       <p>{strings.signup.description}</p>
//
//       <form>
//         <div className="row uniform 50%">
//           <div className="8u 12u(mobilep)">
//             <input type="text" name="name" id="name" placeholder={strings.name} />
//             <input type="email" name="email" id="email" placeholder={strings.email} />
//             <input type="text" name="phone" id="phone" placeholder={strings.phone} />
//           </div>
//           <div className="4u 12u(mobilep)">
//             <input type="submit" value="Sign Up" className="fit" />
//           </div>
//         </div>
//       </form>
//
//     </section>
//   );
// }
// const handleSubmit = (data, e) => {
// 	let postContent = data.postContent;
//
// 	this.setState({ postContent: postContent });
//
// 	$.ajax({
// 	  type: "POST",
// 	  url: this.props.endpointUrl,
// 	  data: postData,
// 	  success: this.handleSubmitSuccess,
// 	  error: this.handleSubmitFailure,
// 	  dataType: 'json'
// 	});
//
// 	e.preventDefault();
// }
//
// const handleSubmitSuccess = (data) => {
// 	if(data.status == 'ok') {
// 		var posts = this.state.posts || [];
// 		posts.push(data.object)
//
// 		this.setState({
// 			alertMessage: this.props.successMessage || 'Post submitted' ,
// 			alertClass: 'alert-box success radius',
// 			showAlert: true,
// 			posts: posts,
// 			showPostBox: false,
// 			showPostLink: true
// 		});
// 	}
// 	else{
// 		this.setState({
// 			alertMessage: data.message || 'There was an error submitting your post' ,
// 			alertClass: 'alert-box alert radius',
// 			showAlert: true
// 		});
// 	}
// }
// const handleSubmitFailure = (xhr, ajaxOptions, thrownError) => {
// 		this.setState({
// 			alertMessage: thrownError || 'There was an error submitting your post' ,
// 			alertClass: 'alert-box alert radius', showAlert: true
// 		});
// }
const Form = React.createClass({

  sendFormData() {
  // Fetch form values.
    var formData = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      email: ReactDOM.findDOMNode(this.refs.email).value,
      phone: ReactDOM.findDOMNode(this.refs.phone).value
    };

    // Send the form data.
    request
      .post({
        url: 'https://getsimpleform.com/messages?form_api_token=320c652e9bb185e431671512d5c5e5f8',
        form: formData,
        json: true
      }, function(err, httpResponse, body) {
        if (err) {
          console.log('ERROR', err, formData);

        }
        else {
          document.getElementById('cta').getElementsByTagName('form')[0].style.display = 'none';
          document.getElementById('cta').getElementsByTagName('h2')[0].innerHTML = strings.thankYou;
          document.getElementById('cta').getElementsByTagName('h3')[0].innerHTML = strings.thankYouStatememnt;
        }
      });

    // var xmlhttp = new XMLHttpRequest();
    // var _this = this;
    // xmlhttp.onreadystatechange = function() {
    //   if (xmlhttp.readyState === 4) {
    //     var response = JSON.parse(xmlhttp.responseText);
    //     if (xmlhttp.status === 200 && response.status === 'OK') {
    //       _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
    //     }
    //     else {
    //       _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
    //     }
    //   }
    // };
    // xmlhttp.open('POST', 'send', true);
    // xmlhttp.setRequestHeader('Content-type', 'application/json');
    // xmlhttp.send(formData);
  },
  handleSubmit(event) {
    event.preventDefault();
    // document.getElementById('banner').scrollIntoView();
    this.setState({ submitted: true }, this.sendFormData);
  },

  render(props) {
  // if (this.state.type && this.state.message) {
      // var classString = 'alert alert-';
      // var status = <div id="status" ref="status"></div>;
  // }

      return (
        <section id="cta">

          <h2>{strings.signupTitle}</h2>
          <h3>{strings.signupDescription}</h3>

          <form dir={strings.direction} ref="form" action="https://getsimpleform.com/messages?form_api_token=320c652e9bb185e431671512d5c5e5f8" method="post" onSubmit={this.handleSubmit}>

            <div className="row uniform 50%">
              <div className="12u 12u(mobilep)">
                <input type="text" name="name" ref="name" id="name" placeholder={strings.name} />
              </div>
              <div className="12u 12u(mobilep)">
                <input type="email" name="email" ref="email" id="email" placeholder={strings.email} />
              </div>
              <div className="12u 12u(mobilep)">
                <input type="text" name="phone" ref="phone" id="phone" placeholder={strings.phone} />
              </div>
            </div>
            <div className="row uniform 50%" style={{'display':'none'}}>
              <div className="12u">
                <div className="select-wrapper">
                  <select name="category" id="category" >
                    <option value="">- {strings.category} -</option>
                    <option value="{strings.category1}">{strings.category1}</option>
                    <option value="{strings.category2}">{strings.category2}</option>
                    <option value="{strings.category3}">{strings.category3}</option>
                    <option value="{strings.category4}">{strings.category4}</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row uniform">
              <div className="12u">
                <ul className="actions">
                  <li><input type="submit" value={strings.signup} onClick={this.submitForm}/></li>
                </ul>
              </div>
            </div>
          </form>
        </section>
      );

  }
});

const Footer = () => {
  return (
    <footer id="footer">
      <ul className="icons">
        <li><a href="http://twitter.com/spoons_app" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
        <li><a href="http://instagram.com/spoons.app" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        <li><a href="mailto:info@spoons.io" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
      </ul>
      <ul className="copyright">
        <li>{strings.footer}</li>
      </ul>
    </footer>
  );
}
class App extends Component {
  switchLanguageHandler() {
    if (strings.getLanguage() === 'en') {
      let isArabic = true;
      strings.setLanguage('ar');
    }
    else {
      let isArabic = false;
      strings.setLanguage('en');
    }
    console.log('isArabic:', isArabic);

    this.forceUpdate();
  }
  render() {
    return (
      <div className="page-wrapper" style={{'direction': '{strings.direction}'}}>
        <Header title={strings.title} description={strings.description} switchLanguage={this.switchLanguageHandler.bind(this)} />
        <Banner isArabic={isArabic} />
        <Form />
        {/*<Main />
        <CallToAction />*/}
        <Footer />
      </div>
    );
  }
}



export default App;
