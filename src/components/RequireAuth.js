import React, { useEffect } from 'react';
import { compose } from 'lodash/fp';
import query from '../queries/CurrentUser';
import { withRouter } from 'react-router';
import { useQuery } from "@apollo/client";

const requireAuth = BaseComponent => ({ history }) => {
    const { data, loading } = useQuery(query);
    
    useEffect(() => { 
        //if the user does not exist, push them to the homepage
        if(!loading && !data?.user) {
            history.push('/login');
        }
    });
    return (
        <BaseComponent />
    );
};

export default compose(
  withRouter,
  requireAuth
);
