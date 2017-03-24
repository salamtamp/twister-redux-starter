import { connect } from 'react-redux'
import { matchPath } from 'react-router-dom'
import TweetList from '../components/TweetList'
import { fetchTweets } from '../actions/tweet'

const mapDispatchToProps = dispatch => ({
  fetchTweets: username => dispatch(fetchTweets(username)),
})

const mapStateToProps = (state) => {
  const match = matchPath(
    state.router.location.pathname,
    { path: '/:ownerUsername' },
  )

  return {
    tweets: state.tweets,
    ownerUsername: match ? match.params.ownerUsername : null,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TweetList)
