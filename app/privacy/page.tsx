import { BUSINESS_INFO } from '@/lib/constants'

export default function PrivacyPolicy() {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <div className="prose lg:prose-xl max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            {BUSINESS_INFO.name} ("us", "we", or "our") operates the {BUSINESS_INFO.name} website (the "Service").
          </p>
          <p>
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>

          <h2>Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>

          <h3>Types of Data Collected</h3>
          <h4>Personal Data</h4>
          <p>
            While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
          </p>
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
            <li>Cookies and Usage Data</li>
          </ul>

          <h4>Usage Data</h4>
          <p>
            We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>

          <h2>Use of Data</h2>
          <p>
            {BUSINESS_INFO.name} uses the collected data for various purposes:
          </p>
          <ul>
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
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
