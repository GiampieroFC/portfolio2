import Row from "react-bootstrap/Row"
import { SiSvelte, SiCss3, SiTypescript, SiVite, SiRedux, SiFirebase, SiReact, SiGo, SiJavascript, SiHugo, SiHtml5, SiBootstrap, SiNodedotjs } from 'react-icons/si'
import CardSkill from "../atoms/cards/CardSkill"


function Skills() {
    return (
        <Row className="mt-4 text-center">

            <CardSkill
                link="https://es.reactjs.org/"
                icon={<SiReact
                    size={'8rem'}
                    color={'#61DBFB'}
                />}
                name="React"
                definition="The library for web and native user interfaces."
            />
            <CardSkill
                link="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
                icon={<SiJavascript
                    size={'8rem'}
                    color={'#f0db4f'}
                />}
                name="JavaScript"
                definition="JavaScript is a programming language that allows you to implement complex functionalities on web pages."
            />
            <CardSkill
                link="https://getbootstrap.com/"
                icon={<SiBootstrap
                    size={'8rem'}
                    color={'#602C50'}
                />}
                name="Bootstrap"
                definition="Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins."
            />

            <CardSkill
                link="https://react-redux.js.org/"
                icon={<SiRedux
                    size={'8rem'}
                    color={'#764abc'}
                />}
                name="React Redux"
                definition="Redux is a predictable state container for JavaScript apps."
            />

            <CardSkill
                link="https://firebase.google.com/"
                icon={<SiFirebase
                    size={'8rem'}
                    color={'#FFCB2B'}
                />}
                name="Firebase"
                definition="Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world."
            />

            <CardSkill
                link="https://nodejs.org/en"
                icon={<SiNodedotjs
                    size={'8rem'}
                    color={'#68A063'}
                />}
                name="Node.js"
                definition="Node.js is an open-source, cross-platform JavaScript runtime environment. As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications."
            />

            <CardSkill
                link="https://go.dev/"
                icon={<SiGo
                    size={'8rem'}
                    color={'#29BEB0'}
                />}
                name="Go"
                definition="Build simple, secure, scalable systems with Go. An open-source programming language supported by Google."
            />

            <CardSkill
                link="https://vitejs.dev/"
                icon={<SiVite
                    size={'8rem'}
                    color={'#915cf5'}
                />}
                name="Vite"
                definition="Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects."
            />

            <CardSkill
                link="https://www.typescriptlang.org/"
                icon={<SiTypescript
                    size={'8rem'}
                    color={'#007acc'}
                />}
                name="TypeScript"
                definition="TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
            />
            <CardSkill
                link="https://svelte.dev/"
                icon={<SiSvelte
                    size={'8rem'}
                    color={'#f23b05'}
                />}
                name="Svelte"
                definition="Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app."
            />

            <CardSkill
                link="https://gohugo.io/"
                icon={<SiHugo
                    size={'8rem'}
                    color={'#ff4088'}
                />}
                name="H.U.G.O"
                definition="Hugo is one of the most popular open-source static site generators. With its amazing speed and flexibility, Hugo makes building websites fun again."
            />

            <CardSkill
                link="https://www.w3.org/Style/CSS/"
                icon={<SiCss3
                    size={'8rem'}
                    color={'#264de4'}
                />}
                name="CSS3"
                definition="Cascading Style Sheets (CSS) is a simple mechanism for adding style (e.g., fonts, colors, spacing) to Web documents."
            />

            <CardSkill
                link="https://html.spec.whatwg.org/"
                icon={<SiHtml5
                    size={'8rem'}
                    color={'#F65314'}
                />}
                name="HTML5"
                definition="HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript)."
            />

        </Row>
    )
}

export default Skills