import React from 'react';

import Setting from './container/setting';

const RoomApp = () => (
  <React.Fragment>
    <main className="L-Main">
      <div>Video</div>
      <div>Users</div>
    </main>
    <Setting />
    <div className="L-RightSide">右メニュー</div>
  </React.Fragment>
);

export default RoomApp;