import React from 'react'
import './CommunityGuidelines.css'

const CommunityGuidelines = () => {
  return (
    <>
      <div className="guidelines-container">
        <h1>Community Guidelines</h1>
        <p>Welcome to our community! Please read and adhere to the following guidelines:</p>

        <section>
          <h2>Respect and Safety</h2>
          <ul>
            <li>Be respectful to others. Treat others as you would like to be treated.</li>
            <li>No hate speech or bullying. We do not tolerate harassment, discrimination, or abuse.</li>
          </ul>
        </section>

        <section>
          <h2>Content and Communication</h2>
          <ul>
            <li>Keep conversations relevant to the topic. Off-topic discussions can be distracting.</li>
            <li>Use appropriate language. Avoid profanity and offensive language.</li>
            <li>Do not spam or promote self-interests excessively. Share content that is beneficial to the community.</li>
          </ul>
        </section>

        <section>
          <h2>Privacy and Security</h2>
          <ul>
            <li>Do not share personal information. Protect your privacy and the privacy of others.</li>
            <li>Report any suspicious activities to the moderators. Help us keep the community safe.</li>
          </ul>
        </section>

        <section>
          <h2>FAQ</h2>
          <h3>What happens if I violate a guideline?</h3>
          <p>Violating a guideline may result in a warning, temporary suspension, or permanent ban depending on the severity of the violation.</p>

          <h3>How can I report a violation?</h3>
          <p>If you notice any violations, please report them to the moderators through the contact form or by sending an email to <a href="mailto:support@community.com">support@community.com</a>.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions or need further assistance, please contact our support team at <a href="mailto:support@community.com">support@community.com</a>.</p>
        </section>

        <section>
          <button onClick={() => alert('Thank you for agreeing to the guidelines!')}>I Agree</button>
        </section>
      </div>
    </>
  )
}

export default CommunityGuidelines