import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white shadow-md p-6 rounded-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-900">
          Cookie Information
        </h1>

        <h2 className="text-xl font-semibold text-center mb-6 text-blue-700">
          INTERNATIONAL FAN MEDIA, SL
          <br />
          Madrid, Spain
        </h2>

        <div className="text-gray-700 leading-relaxed">
          <ol style={{ listStyleType: "upper-roman" }}>
            <li>
              <p className="font-bold text-lg">Introduction</p>
              <p className="mb-4">
                The INTERNATIONAL FAN MEDIA, SL website and apps (“INTERNATIONAL
                FAN MEDIA, SL Platforms”) are operated by International Fan
                Media (“we” or “us”).
              </p>
              <p className="mb-4">
                When you visit INTERNATIONAL FAN MEDIA, SL Platforms,
                information relating to the pages you look at may be saved in
                socalled cookies that are stored on the device that is being
                used to access the INTERNATIONAL FAN MEDIA, SL Platforms, or
                using similar technologies such as tracking pixels. This cookie
                policy explains what cookies and tracking pixels are, the
                cookies and tracking pixels we use, what we use them for, and
                how you can adjust your settings in relation to the cookies and
                tracking pixels we use.
              </p>

              <p className="mb-4">
                This cookie policy should be read together with our{" "}
                <a
                  style={{ color: "blue" }}
                 href={`${process.env.NEXT_PUBLIC_HOST}/ReMin/privacyPolicy`}
                >
                  {" "}
                  INTERNATIONAL FAN MEDIA, SL Privacy Policy{" "}
                </a>
                , which sets out how and why we collect, store, use and share
                personal information generally, as well as your rights in
                relation to your personal information and details of how to
                contact us and the relevant supervisory authorities if you have
                a complaint.
              </p>
              <p className="mb-4">
                We may change this cookie policy from time to time and publish
                updated versions to the applicable INTERNATIONAL FAN MEDIA, SL
                Platforms, together with notices of changes where appropriate
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">What is a cookie?</p>
              Cookies are text files that may – depending on your settings – be
              stored on the hard drive of your device (be it a computer, tablet,
              mobile phone or any other device that can access the internet)
              when you visit a website or click on an advertisement. Cookies are
              used to identify the device on which they are saved and are
              operational for a limited period of time.
            </li>

            <li>
              <p className="font-bold text-lg">Why do we use cookies?</p>
              There are five different types of cookie that may be saved on your
              device while browsing the INTERNATIONAL FAN MEDIA, SL Platforms.
              The intended purpose of each is described below.
              <ol style={{ listStyleType: "decimal" }}>
                <li>
                  <strong>Essential cookies</strong>
                  <p>
                    Essential cookies help make the INTERNATIONAL FAN MEDIA, SL
                    Platforms work by enabling basic functions required to
                    navigate the website, access secure areas, authenticate
                    logins, and use contact forms, as well as other enhanced
                    functionalities. This type of cookie cannot be disabled. You
                    can set your browser to block or alert you to them, but if
                    you block their use some parts of the INTERNATIONAL FAN
                    MEDIA, SL Platforms will not work.
                  </p>
                </li>
                <li>
                  <strong>Session cookies</strong>
                  <p>
                    Session cookies allow the INTERNATIONAL FAN MEDIA, SL
                    Platforms to link your actions during a particular browser
                    session. These cookies expire each time you close your
                    browser and do not remain on your device afterwards.
                  </p>
                </li>
                <li>
                  <strong>Persistent cookies</strong>
                  <p>
                    Persistent cookies are stored on your device in between
                    browser sessions. They are used to remember your preferences
                    or actions across INTERNATIONAL FAN MEDIA, SL Platforms,
                    such as items you have viewed and added to your basket when
                    browsing the INTERNATIONAL FAN MEDIA, SL store. These
                    cookies remain on your device until they expire or you
                    delete them.
                  </p>
                </li>
                <li>
                  <strong>Performance cookies</strong>
                  <p>
                    Performance cookies allow us to count visits and traffic
                    sources, so we can measure and improve the performance of
                    the INTERNATIONAL FAN MEDIA, SL Platforms. They help us know
                    which pages are the most and least popular, and show us how
                    visitors move around the site. All information these cookies
                    collect is aggregated and therefore anonymous and used only
                    to improve how the INTERNATIONAL FAN MEDIA, SL Platforms
                    work. If you do not allow these cookies, we will not know
                    when you have visited INTERNATIONAL FAN MEDIA, SL Platforms
                    and will not be able to monitor their performance.
                  </p>
                </li>
                <li>
                  <strong>Targeting cookies</strong>
                  <p>
                    Targeting cookies may be sent through the INTERNATIONAL FAN
                    MEDIA, SL Platforms by our advertising partners, to help
                    them build a profile of your interests and show you relevant
                    adverts on other sites. They do not store directly personal
                    information but are based on uniquely identifying your
                    browser and internet device. If you do not allow these
                    cookies, you will experience less targeted advertising.
                  </p>
                </li>
              </ol>
            </li>

            <li>
              <p className="font-bold text-lg">What are tracking pixels?</p>
              <p className="mb-4">
                In addition to the five types of cookies described above, the
                INTERNATIONAL FAN MEDIA, SL Platforms may use so-called tracking
                pixels to monitor the effectiveness of various elements of the
                INTERNATIONAL FAN MEDIA, SL Platforms (including advertising
                elements). Tracking pixels are very small 1x1 pixel images
                integrated into the code of the INTERNATIONAL FAN MEDIA, SL
                Platforms.
              </p>
              <p className="mb-4">
                When you visit INTERNATIONAL FAN MEDIA, SL Platforms, tracking
                pixels send a limited amount of information to the pixel server.
                This information is used only for statistical purposes in
                relation to (i) the number of different users of the
                INTERNATIONAL FAN MEDIA, SL Platforms; (ii) the number and type
                of pages visited; and (iii) the effectiveness of advertising
                strategies. The information collected may include, for example,
                match locations browsed, match dates browsed, ticket categories
                browsed, your browser language, your IP address and your
                location data (for example, country of residency).
              </p>
            </li>

            <li>
              <p className="font-bold text-lg">
                Consent to use cookies or tracking pixels
              </p>
              <p className="mb-4">
                We ask for your permission (consent) to place cookies, tracking
                pixels and any similar technologies on your device, except where
                these are essential for us to provide you with a service that
                you have requested (e.g. to enable you to put items in your
                shopping basket and use the check-out process).
              </p>
              <p className="mb-4">
                There is a notice on INTERNATIONAL FAN MEDIA, SL Platforms that
                describes how we use cookies and requests your consent to place
                cookies on your device.
              </p>
            </li>
            <li>
              <p className="font-bold text-lg">
              How do I manage cookies and tracking pixels?

              </p>

              <ol style={{listStyleType:"decimal"}}>
  <li>
    <strong>Adjusting your settings via our Cookie Preference Centre</strong>
    <p>
      The Cookie Preference Centre can be used to customise your cookie preferences at any time according to your needs and preferences. This tool records your consents and specifically controls the performance and targeting cookies activated when using the INTERNATIONAL FAN MEDIA, SL Platforms.
    </p>
    <p>
      If you wish to restrict or block the use of cookies in general, you can configure your browser to display a warning message each time a cookie is about to be stored, or you can block all cookies. You can also manually delete any cookies already sent through your browser. For information about how to do this, please refer to sections 2 and 3 below.
    </p>
    <p>
      For ease of navigation, INTERNATIONAL FAN MEDIA, SL recommends that you accept cookies on INTERNATIONAL FAN MEDIA, SL Platforms and do not delete them. Otherwise, some of the features of the INTERNATIONAL FAN MEDIA, SL Platforms may not display or function properly.
    </p>
  </li>
  <li>
    <strong>Adjusting your settings on different browsers</strong>
    <p>
      Cookie management varies from browser to browser. Use your browser's help menu to find out how to adjust your cookie settings, or click on the relevant link below:
    </p>
    <ul>
      <li>
        <a href="https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-11" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          Cookie settings in Internet Explorer
        </a>
      </li>
      <li>
        <a href="https://support.google.com/chrome/answer/95647?hl=en&hlrm=en" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          Cookie settings in Chrome
        </a>
      </li>
      <li>
        <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          Cookie settings in Safari
        </a>
      </li>
      <li>
        <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          Cookie settings in Firefox
        </a>
      </li>
    </ul>
  </li>
  <li>
    <strong>Third-party cookies and how to block them</strong>
    <p>
      You can also block specific types of cookie without adjusting your browser settings.
    </p>
    <ol style={{ listStyleType: 'lower-alpha', marginLeft: '20px' }}>
      <li>
        <strong>Blocking audience-measuring cookies</strong>
        <p>
          Audience-measuring cookies have been placed on our site by Google Analytics. You can block these cookies by clicking on the deactivation link below, downloading the add-on and installing it on your browser. The add-on is compatible with Internet Explorer, Chrome, Firefox, Safari and Opera.
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>
            <a href="https://tools.google.com/dlpage/gaoptout?hl=en" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              Google Analytics Opt-out Browser Add-on
            </a>
          </li>
          <li>
            Please note that the add-on will save a cookie on your device, but that cookie will be used only to prevent your browser from transmitting data to Google Analytics. For more information on deactivating Google Analytics and installing the browser add-on, click here: 
            <a href="https://support.google.com/analytics/answer/181881?hl=fr." target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              Google Analytics opt-out browser add-on
            </a>
          </li>
          <li>
            For more information on Google Analytics' privacy policy, click here: 
            <a href="https://support.google.com/analytics/answer/6004245?hl=fr." target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              Safeguarding your data
            </a>
          </li>
        </ul>
      </li>
      <li>
        <strong>Blocking social network cookies</strong>
        <p>
          To block cookies used by social networks (e.g., via sharing buttons), follow the instructions in the links below:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
          <li>
            <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://help.x.com/en/safety-and-security/x-do-not-track" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              Twitter
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/privacy?hl=en-GB&gl=uk#infochoices" target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
              YouTube
            </a>
          </li>
        </ul>
      </li>
    </ol>
  </li>
  <li>
    <strong>Tracking pixels and how to block them</strong>
    <p>
      Blocking cookies will not automatically block tracking pixels from sending information to the pixel server. You can block this by setting your browser to be as restrictive as possible with external graphics, by adjusting your firewall settings and/or by using certain browser extensions. This may, however, restrict other functions.
    </p>
  </li>
</ol>


              </li>

              <li>
              <p className="font-bold text-lg">
              How to contact us
              </p>
         
Please contact us if you have any questions about this cookie policy or the information we hold about you. You can email us at: remin@internationalfanmedia.com

              </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default page;
