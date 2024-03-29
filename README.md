Unique Deploy URL: https://653bd4352a07ac088b509c44--northcoders-72news.netlify.app
Website URL: https://northcoders-72news.netlify.app
BackEnd repo: https://github.com/PrinceGeord/be-nc-news-public.git

Minimum version of Node: v20.5.1

To run project locally:

- CLI: git clone https://github.com/PrinceGeord/nc-news.git
- CLI: cd fe-nc-news
- install the required modules (the Dependencies and DevDependencies can be found in the package.json )
- CLI: npm run dev

NC-News App - What is it?

The NC-News website is a website which allows users to peruse articles that have been generated by our carefully vetted authors/contributors. Depending on how the user feels about each article, they can leave a comment or vote on what they thought of the article.

This is a solo project in which its purpose is to demonstrate capabilities in both Front and Backend development. The Frontend uses the React library and the backend utilises PostgreSQL.

NC-News App - How to use the website?

The user will be greeted by the home page - the home page is always accessible via the nav bar (click Home)

To view an article the user can either:

- click on one of the 4 article cards presented on the home page (these 4 will be the most recently published articles)

- Navigate to "See full list of articles" and select an article from the wider repository. This list of articles can be rearranged using the filter buttons at the top. Use the dropdown to choose your sorting criteria, and to reverse the order in which the articles appear on screen you can click the "Click here to reverse order" button .

- If you wish to refine your search, navigate to the Search page via the Nav bar and click on one of the topics you would like to see some related articles for. This will take you back to a the Article list page except with a refined selection of articles.

When viewing an article there are a number of interactive elements that the user can engage in:

Voting: At NC-News we have implemented an Hoot/Boot system, the user will click the Owl if they think the article is a "hoot" (postive feedback) or the "shoe" icon if they wish to give the article the "boot" (negative feedback)

The user can only vote once per page render, however if the user has a change of heart they can change their vote to the opposite (postivie to negative and vice-versa)

Commenting:

Users can leave comments just below the article, the comments must have content in order to be submitted. Here at NC-News we believe every opinion should be well thought out before sharing it with the world, therefore we have implemented a single comment per render system.

Users can also delete their own comments if they so choose via the easily accessible Delete Comment button
