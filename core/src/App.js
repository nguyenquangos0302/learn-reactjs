import React, { PureComponent } from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";

// function App() {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => {
//       console.log(position);
//     },
//     (error) => console.log(error)
//   );
//   return (
//     <div className="ui container comments">
//       {/* <ApprovalCard>
//         <CommentDetails />
//       </ApprovalCard>
//       <CommentDetails />
//       <CommentDetails /> */}
//     </div>
//   );
// }

class App extends PureComponent {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => console.log(error)
    );
    return <div>Latitude: {}</div>;
  }
}

export default App;
