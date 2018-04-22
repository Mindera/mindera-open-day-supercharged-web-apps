// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Magic,
  Appear,
  Link,
  Layout,
  Fit,
  Fill,
  CodePane
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import preloader from "spectacle/lib/utils/preloader";

import images from "./images";

// Require CSS
require("normalize.css");

preloader(images);

const theme = createTheme({
  primary: "#fff",
  secondary: "#070504",
  ternary: "#ffd100",
  quaternary: "#0047cc",
  charcoal: "#58595b",
  silver: "#949598",
  brick: "#ff3b00"
}, {
  primary: "Raleway",
  secondary: "Raleway"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="none" controls={false}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Supercharged Web Apps
          </Heading>
          <Text margin="10px 0 0" textColor="ternary" size={1} fit bold>
            powering web apps with native-like capabilities
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} lineHeight={2} textColor="secondary" caps>Hello 👋</Heading>
          <Heading size={4} lineHeight={1} textColor="secondary" caps>I'm Tiago Nunes</Heading>
          <Appear>
            <div>
              <Text margin="10px 0 0" size={3} lineHeight={1} textColor="ternary" bold>
                Software Engineer at Mindera
              </Text>
              <Text margin="30px 0 50px" size={1} lineHeight={1} italic>
                <Link href="mailto:tiago.nunes@mindera.com" textColor="secondary" bold size={1}>
                  tiago.nunes@mindera.com
                </Link>
              </Text>
              <Image width="50px" src={images.minderaLogo} />
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} caps>Agenda</Heading>
          <List>
            <Appear>
              <ListItem>What</ListItem>
            </Appear>
            <Appear>
              <ListItem>Why</ListItem>
            </Appear>
            <Appear>
              <ListItem>How</ListItem>
            </Appear>
            <Appear>
              <ListItem>What else?</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            What
          </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} lineHeight={1.1} bold={false} textColor="secondary">
            Providing a <b>fast</b>, <b>reliable</b> and <b>offline-capable</b> web-experience
          </Heading>
        </Slide>

        <Magic>
          <Slide bgColor="ternary">
            <Heading size={3} textColor="primary">
              PWA
            </Heading>
          </Slide>
          <Slide bgColor="ternary">
            <Heading size={3} textColor="primary">
              Progressive Web Apps
            </Heading>
          </Slide>
        </Magic>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            Why
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} lineHeight={1.1} bold={false} textColor="secondary">
            <b>53%</b> of visitors abandon websites if it takes more than <b>3 seconds</b> to load
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            1s delay
          </Heading>
          <Heading margin="30px 0" size={1} textColor="secondary">
            ↓
          </Heading>
          <Text>
            <b>11% fewer</b> page views
          </Text>
          <Text>
            <b>16% decrease</b> in customer satisfaction
          </Text>
          <Text margin="30px 0 0">
            😢
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <Layout>
            <Fill>
              <Text>
                <b>100ms</b> less loading time
              </Text>
            </Fill>
            <Fit>
              <Text bold>→</Text>
            </Fit>
            <Fill>
              <Text>
                <b>1.11%</b> increase in conversion
              </Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Heading size={6} caps>Scenarios</Heading>
          <List>
            <ListItem>Limited wireless/cellular data availability</ListItem>
            <ListItem>Flaky network conditions</ListItem>
            <ListItem>Flights</ListItem>
            <ListItem>Subways / Tunnels</ListItem>
            <Appear>
              <ListItem textColor="charcoal">Client-only private data</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            How
          </Heading>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Image width="100%" src={images.magic} />
        </Slide>

        <Magic>
          <Slide bgColor="ternary">
            <Heading size={3} textColor="primary">
              PRPL
            </Heading>
          </Slide>
          <Slide bgColor="ternary">
            <Heading size={3} textColor="primary">
              The PRPL Pattern
            </Heading>
          </Slide>
        </Magic>

        <Slide
          bgColor="primary"
          transitionIn={[
            "fade",
            (transitioning, entering) => {
              return entering ? {
                backgroundColor: transitioning ? "#ffd100" : "#fff"
              } : {};
            }
          ]}
        >
          <Heading margin="0 0 100px" size={3} textColor="silver">
            The PRPL Pattern
          </Heading>
          <Appear>
            <Text margin="15px 0" textColor="secondary" textAlign="left">
              <b>Push</b> critical resources
            </Text>
          </Appear>
          <Appear>
            <Text margin="15px 0" textColor="secondary" textAlign="left">
              <b>Render</b> initial route
            </Text>
          </Appear>
          <Appear>
            <Text margin="15px 0" textColor="secondary" textAlign="left">
              <b>Pre-cache</b> next routes
            </Text>
          </Appear>
          <Appear>
            <Text margin="15px 0" textColor="secondary" textAlign="left">
              <b>Lazy-load</b> routes on demand
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} transitionDuration={0} bgColor="primary">
          <Heading margin="0 0 100px" size={3} textColor="silver">
            The PRPL Pattern
          </Heading>
          <Text margin="15px 0" textColor="secondary" textAlign="left">
            <b>Push</b> critical resources
          </Text>
          <Text margin="15px 0" textColor="secondary" textAlign="left">
            <b>Render</b> initial route
          </Text>
          <Text margin="15px 0" textColor="quaternary" textAlign="left">
            <b>Pre-cache</b> next routes
          </Text>
          <Text margin="15px 0" textColor="secondary" textAlign="left">
            <b>Lazy-load</b> routes on demand
          </Text>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={1} textColor="secondary">
            Service Workers
          </Heading>
        </Slide>

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          bgImage={images.swDiagram}
          bgSize="fit"
          bgRepeat="no-repeat"
        />

        <Slide
          transition={["zoom", "fade"]}
          bgColor="primary"
          bgImage={images.swLifeCycle}
          bgSize="fit"
          bgRepeat="no-repeat"
          align="center flex-end"
          margin="0 0 10px"
        >
          <Text textSize={14}>
            Image src: https://developers.google.com/web/fundamentals/primers/service-workers
          </Text>
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="-150px 0 125px" textColor="primary">Registering a service worker</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-register.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="-150px 0 125px" textColor="primary">Delaying registration</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-better-register.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="-50px 0 80px" textColor="primary">Installing the service worker</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-install.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="-100px 0 100px" textColor="primary">Handling fetch events</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-fetch.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="0 0 80px" textColor="primary">Manipulating responses</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-mock.example")}
          />
        </Slide>

        <Slide transition={["slide"]} bgColor="charcoal">
          <Text margin="0 0 80px" textColor="primary">Refreshing cached responses</Text>
          <CodePane
            theme="external"
            lang="js"
            margin="0 auto"
            textSize={20}
            overflow="overflow"
            source={require("raw-loader!../assets/sw-fetch-and-revalidate.example")}
          />
        </Slide>

        <Slide transition={["zoom"]} bgColor="quaternary">
          <Heading size={1} caps textColor="primary">
            Demo time 🤞
          </Heading>
        </Slide>

        <Slide transition={["fade"]} transitionDuration={0} bgColor="primary">
          <Heading size={4} margin="0 0 100px">Prerequisites</Heading>
          <List>
            <ListItem margin="15px 0">HTTPS</ListItem>
            <ListItem margin="15px 0">Browser support</ListItem>
          </List>
        </Slide>

        <Slide transition={["spin"]} transitionDuration={0} bgColor="primary">
          <iframe
            style={ { width: "100%", height: "800px", marginTop: "-100px", marginBottom: "10px" } }
            src="https://jakearchibald.github.io/isserviceworkerready/"
          />
          <Text textSize={14}>
            https://jakearchibald.github.io/isserviceworkerready/
          </Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={5} caps margin="0 0 100px">
            Caveats
          </Heading>
          <List>
            <Appear>
              <ListItem margin="40px 0">Do not cache <code>service-worker.js</code></ListItem>
            </Appear>
            <Appear>
              <ListItem margin="40px 0">Version your caches</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="40px 0"><code>skipWaiting()</code> and <code>clients.claim()</code></ListItem>
            </Appear>
            <Appear>
              <ListItem margin="40px 0"><em>Update on reload</em> and <em>Bypass for network</em></ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={["fade"]} transitionDuration={0} bgColor="primary">
          <Heading size={4} margin="0 0 100px">Useful tools and resources</Heading>
          <List>
            <ListItem margin="15px 0">
              <Link
                textColor="secondary"
                href="https://developers.google.com/web/progressive-web-apps/checklist"
                target="_blank"
              >
                PWA Checklist
              </Link>
            </ListItem>
            <ListItem margin="15px 0">
              <Link
                textColor="secondary"
                href="https://developers.google.com/web/tools/lighthouse/"
                target="_blank"
              >
                Lighthouse
              </Link>
            </ListItem>
            <ListItem margin="15px 0">
              <Link
                textColor="secondary"
                href="https://developers.google.com/web/tools/workbox/"
                target="_blank"
              >
                Workbox
              </Link>
            </ListItem>
            <ListItem margin="15px 0">
              <Link
                textColor="secondary"
                href="https://developers.google.com/web/fundamentals/architecture/app-shell"
                target="_blank"
              >
                App Shell Architecture
              </Link>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps textColor="secondary">
            What else?
          </Heading>
        </Slide>

        { /* TODO: Add links to web technologies */ }

        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Heading size={5} caps margin="0 0 60px">
            Web technologies
          </Heading>
          <List>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/updates/2015/12/background-sync"
                  target="_blank"
                >
                  Background sync
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/fundamentals/codelabs/push-notifications/"
                  target="_blank"
                >
                  Push Notifications
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/ilt/pwa/working-with-indexeddb"
                  target="_blank"
                >
                  IndexedDB
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/fundamentals/native-hardware/user-location/"
                  target="_blank"
                >
                  Geolocation
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/fundamentals/native-hardware/device-orientation/"
                  target="_blank"
                >
                  Device orientation
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API"
                  target="_blank"
                >
                  Clipboard
                </Link>
                {" "}and{" "}
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API"
                  target="_blank"
                >
                  Vibration
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API"
                  target="_blank"
                >
                  Media Capture and Streams
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API"
                  target="_blank"
                >
                  Canvas
                </Link>
                {" "}and{" "}
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
                  target="_blank"
                >
                  WebGL
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API"
                  target="_blank"
                >
                  WebRTC
                </Link>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem margin="10px 0">
                <Link
                  textColor="secondary"
                  href="https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web"
                  target="_blank"
                >
                  Web Bluetooth
                </Link>
              </ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Heading size={2} textColor="secondary">Thank you 🙇‍</Heading>
          <Heading size={1} lineHeight={2} textColor="ternary" caps>Questions?</Heading>
          <Text size={1} lineHeight={1}>
            <Link href="mailto:tiago.nunes@mindera.com" textColor="secondary" bold size={1}>
              tiago.nunes@mindera.com
            </Link>
          </Text>
        </Slide>
      </Deck>
    );
  }
}
