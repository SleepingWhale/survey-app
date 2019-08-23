import React, { PureComponent } from 'react';
import { LSHelper } from '../../common';

export class UserInfo extends PureComponent {
  state = { user: null };

  componentDidMount() {
    const user = LSHelper.get('si-user');

    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    if (!user) return <div>Please login</div>;

    return (
      <div>
        {`${user.first_name} ${user.last_name}`}
        <img
          src={user.avatars[0].url}
          alt="user pick"
          className="rounded-circle ml-2"
          style={{
            height: '40px',
            width: '40px',
            objectFit: 'cover',
            objectPosition: 'center center'
          }}
        />
      </div>
    );
  }
}
