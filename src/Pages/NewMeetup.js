import NewMeetupForm from '../Components/meetups/NewMeetupForm';

import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch(
      // for firebase HTTP requests the url must end with the "database" name and format it to JSON
      'https://react-getting-started-37bcc-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: { 'Content-Type': 'application/json' },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
