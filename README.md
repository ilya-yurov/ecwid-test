<h1>Test Project for Lightspeed</h1>

<p>This project serves as a test implementation created for Lightspeed, demonstrating Vue 3 application development with TypeScript, Vite, and Pinia.</p>

<h2>Project Setup</h2>

<h3>Prerequisites</h3>
<p>Ensure you have Node.js version 18.18.0 installed on your machine. Manage Node.js versions with nvm. To use the correct Node.js version specified in the <code>.nvmrc</code> file, run:</p>

<pre><code>nvm use
</code></pre>

<h3>Installation</h3>
<pre><code>yarn install
</code></pre>

<h2>Development</h2>
<p>Run the development server with hot-reloading:</p>

<pre><code>yarn dev
</code></pre>

<h2>Production Build</h2>
<p>Compile and minify for production:</p>

<pre><code>yarn build
</code></pre>

<h2>Running Tests</h2>
<p>To run the demo test, use the following command:</p>

<pre><code>yarn test
</code></pre>

<h2>Environment Variables</h2>
<p>Before running the application, create a <code>.env.local</code> file in the project's root directory. This file should contain the following environment variables:</p>

<ul>
  <li><code>VITE_STORE_ID</code>: Your store ID.</li>
  <li><code>VITE_API_TOKEN</code>: Your API token.</li>
  <li><code>VITE_API_URL</code>: The URL of the API.</li>
</ul>

<p>Ensure to replace the placeholders with your actual values. These environment variables configure the application and connect it to the appropriate backend services.</p>
