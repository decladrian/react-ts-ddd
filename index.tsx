import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { PostForm } from './views/post/ui/PostForm/PostForm';

interface AppProps {}
interface AppState {
  name: string;
  page: 'form' | 'collection' | 'post';
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      page: 'form',
    };
  }

  navigate(page) {
    alert(page);
    this.setState({ page });
  }

  componentDidMount() {
    //this.navigate('form');
  }

  render() {
    return (
      <div>
        {this.state.page === 'form' && (
          <PostForm navigate={this.navigate.bind(this)} />
        )}
        {this.state.page === 'collection' && <div></div>}
        {this.state.page === 'post' && <div> Post </div>}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
