import { BUSINESS_INFO } from '@/lib/constants'

export default function TermsAndConditions() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Terms and Conditions</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            Please read these terms and conditions carefully before using the {BUSINESS_INFO.name} website (the "Service") operated by {BUSINESS_INFO.name} ("us", "we", or "our").
          </p>

          <h2>Conditions of Use</h2>
          <p>
            We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.
          </p>

          <h2>Privacy Policy</h2>
          <p>
            Before you continue using our website we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.
          </p>

          <h2>Copyright</h2>
          <p>
            Content published on this website (digital downloads, images, texts, graphics, logos) is the property of {BUSINESS_INFO.name} and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of {BUSINESS_INFO.name}, with copyright authorship for this compilation by {BUSINESS_INFO.name}.
          </p>

          <h2>Communications</h2>
          <p>
            The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.
          </p>

          <h2>Applicable Law</h2>
          <p>
            By visiting this website, you agree that the laws of India, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between {BUSINESS_INFO.name} and you, or its business partners and associates.
          </p>

          <h2>Disputes</h2>
          <p>
            Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court in Pune, Maharashtra, India and you consent to exclusive jurisdiction and venue of such courts.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: {BUSINESS_INFO.contact.email}</li>
            <li>By phone number: {BUSINESS_INFO.contact.phone}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
