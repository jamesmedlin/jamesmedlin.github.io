import React from 'react'
import Head from 'next/head'

import { NavBar } from '../components/NavBar'
import { Container } from '../components/Container'
import { NavigationButton } from '../components/NavigationButton'
import { CircularPicture } from '../components/CircularPicture'
import { BigTitle, H1, LittleTitle, BodyText } from '../common/textElements'
import profilePic from '../images/profile.png'

const Home = () => (
  <div className="container">
    <Head>
      <title>JD Medlin</title>
    </Head>

    <main>
      <NavBar />
      <div className="topRow">
        <Container>
          <div className="Row">
            <div className="column">
              <BigTitle marginTop={0} marginBottom={10} fontSize={50} mobileFontSize={25} color="white">Hi, I'm JD Medlin!</BigTitle>
              <BigTitle marginTop={0} marginBottom={54} fontSize={35} mobileFontSize={17} color="white">Welcome to my website :)</BigTitle>
            </div>
            <CircularPicture image={profilePic} href="" onClick={null} width={500} height={500}/>
          </div>
        </Container>
      </div>
      <div className="uploadContainer">
        <Container>
          <div className="Row">
            <div className="columnCentered">
              <div className="uploadTextContainer">
                <BigTitle textAlign="center" marginBottom={30}>About Me</BigTitle>
                <LittleTitle maxWidth={1000}>I’m a Mechanical Engineering
                and Computer Science student at Northeastern University
                graduating in 2022 who is passionate about using technology
                to improve the lives of others. I want to use the skills that
                I have acquired to alter the human experience. From performing
                mechanical maintenance and design on airplanes at United Airlines
                to working on a healthy living app at Second Nature, I truly see
                how technical expertise has the power to make an incredible impact
                on the world.</LittleTitle>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>

    <style jsx>{`
      .topRow {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 150px;
        padding-bottom: 50px;
        background-color: blue;
      }
      @media (max-width: 768px) {
        .topRow {
          padding-top: 100px;
          padding-bottom: 15px;
          background-color: blue;
        }
      }
      .Row {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap-reverse;
      }
      .column,
      .columnCentered {
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      .columnCentered {
        align-items: center;
      }
      @media (max-width: 768px) {
        .column,
        .columnCentered {
          min-width: unset;
        }
      }
      .subText {
        display: flex;
        justify-content: flex-end;
        margin-top: 75px;
      }
      @media (max-width: 768px) {
        .subText {
          margin-top: 40px;
        }
      }
      .uploadContainer {
        padding-top: 30px;
        padding-bottom: 30px;
        background-color: #F6F7F9;
      }
      .uploadTextContainer {
        margin-bottom: 40px;
      }
      @media (max-width: 768px) {
        .uploadTextContainer {
          margin-bottom: 40px;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Home
