import React from 'react';
import { Grid } from '@material-ui/core';

function Landing() {
  return(
    <>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={10} md={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between" wrap="nowrap" className="landing__description-wrap">
            <Grid item className="landing__description-container">
              <h1 className="landing__description">
                Your place for discussion
              </h1>
              <p>
                Be part of our global community. Make new friends and relax with some friendly discorse.
              </p>
            </Grid>
            <Grid item>
              <img className="landing__img" src="./landing01.png" alt="discuss"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={10} md={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between" wrap="nowrap" className="landing__description-wrap">
            <Grid item>
              <img className="landing__img landing__img-even" src="./landing02.png" alt="discuss"/>
            </Grid>
            <Grid item className="landing__description-container">
              <h1 className="landing__description">
                Pick your topic
              </h1>
              <p>
                Share your passion with others. Talk about a wide range of topics.
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="landing__section-container" container>
        <Grid xs={12} sm={10} md={6} className="landing__section" container item justify="center" direction="column">
          <Grid container item direction="row" justify="space-between" wrap="nowrap" className="landing__description-wrap">
            <Grid item className="landing__description-container">
              <h1 className="landing__description">
                Express yourself
              </h1>
              <p>
                Don't be limited to text. Show everyone what you are talking about.
              </p>
            </Grid>
            <Grid item>
              <img className="landing__img" src="./landing03.png" alt="discuss"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Landing;