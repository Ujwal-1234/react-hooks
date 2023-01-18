import { render } from "@testing-library/react";
import createReactClass from "create-react-class";
import React from "react";
// import ReactDOM from "react-dom";
import { fetchRepos } from "./api.js";
import Loading from "./Loading";

const App2 = createReactClass({
    getInitialState() {
      return {
        repos: [],
        loading: true
      };
    },
    componentDidMount() {
      this.updateRepos(this.props.id);
    },
    componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
        this.updateRepos(this.props.id);
      }
    },
    updateRepos(id) {
      this.setState({ loading: true });
  
      fetchRepos(id).then(repos =>
        this.setState({
          repos,
          loading: false
        })
      );
    },
    render() {
      const { loading, repos } = this.state;
  
      if (loading === true) {
        return <Loading />;
      }
      return (
        <ul>
            {console.log(repos)}
          {repos.map(({ name, handle, stars, url }) => (
            <li key={name}>
              <ul>
                <li>
                  <a href={url}>{name}</a>
                </li>
                <li>@{handle}</li>
                <li>{stars} stars</li>
              </ul>
            </li>
          ))}
        </ul>
      );
    }
});

export default App2;