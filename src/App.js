import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container, Header, Icon, Label, Image, Grid } from "semantic-ui-react";
import Typography from "typography";
import zupage from "zupage";
import stAnnesTheme from "typography-theme-st-annes";

const typography = new Typography(stAnnesTheme);
// typography.injectStyles();

class App extends Component {
  state = { post: { body: "", images: [], creator: {} } };

  async componentDidMount() {
    // const post = await zupage.getPost('4122d340-7bdb-4996-8400-f3d582d84280');
    const post = await zupage.getCurrentPost();
    this.setState({ post });
    console.log("Response!", post);
  }

  imageTagCreater = images => {
    return images.map(image => {
      return <Image src={image.url} key={image.id} />;
    });
  };

  render() {
    const { images, body, title, creator } = this.state.post;
    return (
      <Grid divided="vertically" style={{ padding: 20 }}>
        <Grid.Row columns={3} centered>
          <Grid.Column width="7">
            <Container textAlign="center">
              <Header as="h1" style={{ margin: 0 }}>
                {title}
              </Header>
              <Header as="h4" style={{ margin: 5 }} />
              <Label>
                <Image avatar src={creator.profile_image_url} />
                <span>{creator.name}</span>
              </Label>
              <br />
              <br />
              <Container textAlign="left">{body}</Container>
            </Container>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width="7">{this.imageTagCreater(images)}</Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;

{
  /* <Image
  src="https://images.unsplash.com/photo-1529474698432-ceeb8e5cb9dc?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=52258797ddf209a751b5a4bb46bb7bd3&auto=format&fit=crop&w=934&q=80"
  fluid
/>
<Image
  src="https://images.unsplash.com/photo-1529420979753-0c3395873630?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2594d8a36fd83625849b0ea22172d6fb&auto=format&fit=crop&w=1001&q=80"
  fluid
/> */
}
