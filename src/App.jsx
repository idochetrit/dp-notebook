import logo from './logo.svg';

function App() {
  return (
    <div class='grid place-items-center grid-cols-1 mt-10'>

      <div class="card card-compact shadow-xl min-h-96 w-4/6 bg-base-300">

        <main class='card-body  '>
          <h3 class="card-title">Daily Plan</h3>
          <p class="text-base-content">Today's tasks</p>
          <div class="divider"></div>
          <div class="grid grid-cols-1 gap-4">
            <div class="card bg-base-200">
              <div class="card-body">
                <h2 class="card-title
              ">Morning</h2>
                <p class="text-base-content">8:00 AM - 12:00 PM</p>
                <div class="divider"></div>
                <p class="text-base-content">Morning tasks</p>
                <textarea class="textarea h-24 textarea-bordered" placeholder="Enter your tasks"></textarea>
              </div>
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}

export default App;
