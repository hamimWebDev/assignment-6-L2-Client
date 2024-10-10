import CurrentPost from "@/src/services/RecentPost";

const RecentPost = async () => {
  const { recipes } = await CurrentPost();
  console.log(recipes);
  return (
    <div>
      <h1>This is RecentPost grid</h1>
      <div>
        {recipes.map((recipe: any) => (
          <p key={recipe?._id}>{recipe.title}</p>
        ))}
      </div>
    </div>
  );
};

export default RecentPost;
