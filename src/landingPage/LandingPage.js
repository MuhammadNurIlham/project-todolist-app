import React from 'react';
import Intro from '../components/intro'
import SectionIntro from '../components/section';
import Footer from '../components/footer';
import Project from '../components/projects';
import ExampleCrud from '../components/example';
// import TodoList from '../components/TodoList copy';

function LandingPage() {
    return (
        <div>
            <Intro />
            <SectionIntro />
            <Project />
            <ExampleCrud />
            <Footer />
        </div>
    )
}

export default LandingPage;