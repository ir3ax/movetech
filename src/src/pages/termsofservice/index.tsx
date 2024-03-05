import TermsOfServiceImg from '../../assets/utilities/termsOfUse.png'
import Footer from '../../components/appLayout/footer';
import { TopBar } from '../../components/appLayout/topbar';

const TermsOfService = () => {
      
	return (
		<div className='w-full h-full'>
			<div className='sticky top-0 z-50 drop-shadow-md shadow-black bg-[#f3efef]'>
                <TopBar />
            </div>
			<div className='bg-white flex justify-center items-center flex-col'>
				<div className='bg-white relative w-full h-[50vh] flex justify-center items-center'>
					<img className='object-cover w-full h-full' src={TermsOfServiceImg}/>
					<span className='absolute font-bold text-white text-[60px] max-sm:text-[42px] text-center tracking-wider'>Terms Of Service</span>
				</div>
				<div className='bg-white relative w-full h-full pl-24 pr-24 max-sm:pl-8 max-sm:pr-8 mt-16 tracking-wider max-sm:text-sm text-lg'>
					<p className='font-bold text-[#403E3C]'>Introduction</p>
					<p className='mt-5'>These terms of Service the "Terms" governs your access to, and the use of, the websites, the mobile text program, third party messaging platforms, and online services collectively referred to as \"the Services\" operated by or on behalf of Movetech.
                    These terms of Service (the "Terms") govern your access to, and the use of, the websites, the mobile text program, third party messaging platforms, and online services collectively referred to as "the Services" operated by or on behalf of Movetech.
                    </p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>1. Binding Agreement:</span> The terms are a binding legal document between you and Movetech. Please read the terms carefully prior to using the Services. Children under the age of fourteen (14) is prohibited from using our website. If you are between the ages of fourteen and eighteen, parental consent is necessary. In the event parental consent is unavailable, you must immediately leave our website and notify Movetech at movetech.ecomms@gmail.com</p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>2. Privacy:</span> By using the Services, you have acknowledged that you have reviewed and understand our Privacy Policy and have consented to the practices as described in our policy.

                    Movetech makes no representation about the reliability of the features of the Services and any reliance on such material and/or shrives is at your own risk. Movetech does not endorse or control over submitted content on our online platform, mobile, and in person.

                    The Services are provided on an "as is" basis without any representation or warranty, express or implied, of any kind. To the fullest extent permitted by applicable law, Movetech hereby denies all warranties of any kind or nature, including, but not limited to, the implied warranties of merchantability, accuracy, non-infringement, and for any other purpose. Movetech will not be held liable to any person for dames of any kind, any direct, indirect, special consequential, punitive, or other dames resulting from your use of or inability to use the Services.
                    </p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>3. Indemnification:</span> You agree to indemnify, defend, and hold harmless Movetech, its affiliates, its providers, its cobranding partners, project partners, and its officers, directors, employees, attorneys, and agents from and against any and all claims, damages, losses, costs (including reasonable attorney's fees), and expense that arise directly or indirectly out of or from your breach of these Terms and/or your activities in connection with the Services made available therein.</p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>4. Online Purchases:</span> To purchase food products, merchandise, and other products through the Services, you must know that all transactions are all cash on delivery (COD) method. The total price will be made clear during the order process. You agree to pay the price that is stated at the time of your order, as well as any applicable taxes. By purchasing items through the Services, you represent and warrant to Movetech that you are capable of entering into a contract under applicable law. Movetech reserve the right to revoke your access to our Services at any time without explanation.</p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>5. Text Messaging Notice:</span> Text messaging may be necessary for the use of the Services, promotions, and notifications that may involve sending or receiving messages. Movetech will not charge you for the text messaging, however, standard text messaging rates will apply to each text message sent or received as provided in your wireless rate plan. Consult your phone carrier for pricing plans and details.</p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>6. Governing Law and Jurisdiction:</span> This Agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of the Philippines.</p>
					<p className='mt-5'><span className='font-bold text-[#403E3C]'>7. Dispute Resolution:</span> You agree that any claim or dispute with Movetech arises connected to these Terms, you will send a written notice to Movetech. You agree that the requirements of this Dispute Resolution will apply even to disagreements that may have arisen before you accepted these Terms. You agree you will not take any legal action, including filing a lawsuit or demanding arbitration until 30 business days after you have sent the written notice. You agree for each dispute that is brought into a jury trial, arbitration, and/or mediation, the outcome is in Movetech favor, you must pay all fees and costs incurred by Movetech in court, including reasonable attorney's fees. You agree that you will not file a class action or collective action against Movetech, and you will not participate in a class action or collective action against them. You agree that you will not join your claims to those of any other person.</p>
				</div>
			</div>
			<div className='mt-24'>
				<Footer />
			</div>
		</div>
	);

};

export default TermsOfService;