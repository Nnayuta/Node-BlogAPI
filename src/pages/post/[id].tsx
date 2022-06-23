import { GetStaticPaths, GetStaticProps } from 'next';

import PostPage from '../../components/Main/Posts';
import { PostModel } from '../../models/PostModel';
import PostSchema from '../../schema/PostSchema';
import UserSchema from '../../schema/UserSchema';
import { MongoDB } from '../../utils/MongoDB';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  await MongoDB.connect()
  const id = context.params.id;
  const post = await PostSchema.findById(id).populate('author', '-password -__v -createdAt -updatedAt -username', UserSchema).select('-__v')
  const Post = JSON.parse(JSON.stringify(post));
  await MongoDB.disconnect()

  return {
    props: {
      post: Post,
    }
  }
}

const post = (props) => {

  const { post }: { post: PostModel } = props

  return (
    <PostPage post={post} />
  )
}

export default post;