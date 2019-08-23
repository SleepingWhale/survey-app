import { PureComponent } from 'react';
import { fetchDataAsync } from './fetchDataHelper';
import { LSHelper } from '../../common';

function setUserInfo({ data }) {
  let user = null;
  let longestNameLength = 0;

  data.forEach(u => {
    const { first_name: firstName, last_name: lastName } = u;
    let fullName = firstName + lastName;
    fullName = fullName.replace(/\s/g, '');

    if (fullName.length > longestNameLength) {
      user = u;
      longestNameLength = fullName.length;
    }
  });

  LSHelper.set('si-user', user);
}

export class LoginWrapper extends PureComponent {
  state = { loading: true };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  async getData() {
    this.setState({
      loading: true
    });

    this.controller = new window.AbortController();

    const result = await fetchDataAsync(
      'https://tinyfac.es/api/users',
      this.controller.signal
    );

    if (result.error && result.error.name === 'AbortError') return;

    setUserInfo(result);

    this.setState({
      loading: false
    });
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;

    return loading ? 'Loading...' : children;
  }
}
