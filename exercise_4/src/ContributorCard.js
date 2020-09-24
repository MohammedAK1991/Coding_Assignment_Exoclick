import React from 'react';
import {Card, Image} from 'semantic-ui-react';

export default function ContributorCard ({person}) {
  return (
    <Card>
    <Image src={person.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{person.login}</Card.Header>
      <Card.Description>
        {person.login} made {person.contributions} contributions to this repository
      </Card.Description>
    </Card.Content>
  </Card>
  )
}