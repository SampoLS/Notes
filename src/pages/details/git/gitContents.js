import { v4 as uuidv4 } from "uuid";

const url = "https://git-scm.com/";

export const gitContents = [
  {
    id: uuidv4(),
    title: "Git",
    isLargerTitle: true,
    path: "/git",
    url: `${url}`,
    anchor: "git",
    text: {
      p1: (
        <p>
          Git is a free and open source distributed version control system
          designed to handle everything from small to very large projects with
          speed and efficiency.Git is a version control system. Git helps you
          keep track of code changes. Git is used to collaborate on code.
        </p>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "Git Push to GitHub",
    isLargerTitle: false,
    path: "/git",
    url: ``,
    anchor: "git-push-to-github",
    text: {
      p1: (
        <ol className="list">
          <li>
            Push Local Repository to GitHub: git remote add origin
            https://github.com/w3schools-test/hello-world.git. "git remote add
            origin URL" specifies that you are adding a remote repository, with
            the specified URL, as an origin to your local Git repo.
          </li>
          <li>
            Now we are going to push our master branch to the origin url, and
            set it as the default remote branch: git push --set-upstream origin
            master
          </li>
          <li>
            Commit the changes: git commit -a -m "Updated index.html. Resized
            image"
          </li>
          <li>And check the status: git status</li>
          <li>Push our changes to our remote origin: git push origin</li>
        </ol>
      ),
    },
  },
  {
    id: uuidv4(),
    title: "! [rejected] master -> master (non-fast-forward) - Git Error",
    isLargerTitle: false,
    path: "/git",
    url: ``,
    anchor: "error",
    text: {
      p1: (
        <div>
          <ol className="list">
            <p>
              To prevent you from losing history, non-fast-forward updates were
              rejected Merge the remote changes (e.g. 'git pull') before pushing
              again.
            </p>
            <li>git fetch origin</li>
            <li>git merge origin master(your branch name)</li>
          </ol>
          <p>
            Or, you can simply use git pull to perform both commands at once:
          </p>
          <ol className="list">
            <li>
              git pull origin master(YOUR_BRANCH_NAME, Grabs online updates and
              merges them with your local work )
            </li>
          </ol>
        </div>
      ),
    },
  },
];
