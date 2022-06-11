import selfie from './selfie.jpg';

const About = (props) => {

    const activePage = props.activePage;

    return (
        <div id="about" className={ activePage === 2? 'content' : 'hidden' }>
			<div id="intro">
				<p>I am Ruixue Luo, a MEng of ECE. This fall will be my second year at UBC. Although my major is Electrical and Computer Engineering and I studied EE when doing my bachelor's, I will probably become a software engineer next year. (Just wish me luck!)</p>
				<p>I am rather dull actually...</p>
			</div>
			<div id="photo">
				<img src={selfie} alt="" />
			</div>
		</div>
    );
}
 
export default About;