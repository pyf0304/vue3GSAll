<template>
  <div>
    <div>
      <button class="btn btn-success"> <i class="fas fa-arrow-up"></i> 上移 </button>
    </div>
    <p>Received Parameter: {{ $route.query.param1 }}</p>
    <p>UserId: {{ UserId }}</p>
    <p>UserName: {{ UserName }}</p>

    textarea1:<textarea
      id="txtSubViewpointContent"
      class="form-control"
      style="width: 550px; height: 80px"
    ></textarea>
    textarea2:
    <textarea
      id="txtSubViewpointContent"
      class="form-control form-control-sm"
      style="width: 550px; height: 80px"
    ></textarea>
    <br />
    input1:<input
      id="txtSubViewpointContent1"
      type="text"
      class="myInput"
      style="width: 550px; height: 80px"
    />
    <br />
    input2(form-control-sm):
    <input id="txtSubViewpointContent2" type="text" class="form-control form-control-sm" />
    <br />
    input2(form-control-sm): <input id="txtSubViewpointContent2" type="text" class="form-control" />

    <br />
    input3:
    <input id="txtSubViewpointContent2" type="text" />

    <div>
      <font-awesome-icon icon="check" />
      、
      <font-awesome-icon icon="home" />
      、
      <font-awesome-icon icon="plus" />
      、
      <font-awesome-icon :icon="['fas', 'plus']" />
      、
      <font-awesome-icon icon="coffee" />、 <font-awesome-icon icon="user" />、
      <font-awesome-icon icon="search" /><br />
      1. <i class="fa-solid fa-play"></i>、 2. <font-awesome-icon icon="play" />、 3.
      <i class="fas fa-caret-down"></i> 3. <font-awesome-icon :icon="['fas', 'caret-down']" />
      <!-- 1. <font-awesome-icon :icon="['fas', 'trash-alt']" /> 、  -->
      2. <font-awesome-icon :icon="['fass', 'trash']" />
    </div>
    <br />
    <button @click="testIconHtml">testIconHtml</button>
    <div id="testIconHtml"></div>
    <span> this a about page!</span>

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="javascript:void(0)">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="javascript:void(0)">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="javascript:void(0)"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0)">Action</a></li>
                <li><a class="dropdown-item" href="javascript:void(0)">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="javascript:void(0)">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
  import 'jquery/dist/jquery.min';
  import 'bootstrap/dist/js/bootstrap.min';
  import 'bootstrap/dist/css/bootstrap.css';
  import { defineComponent, ref } from 'vue';
  import { clsIcon } from '@/ts/PubFun/clsIcon';
  export default defineComponent({
    name: 'AboutPyf',
    setup() {
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      function testIconHtml() {
        const testIconHtml = document.getElementById('testIconHtml') as HTMLDivElement;
        const strSvg =
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>';
        let strHtml = `faPlay:${clsIcon.faPlay}, `;
        strHtml += `faTrash:${clsIcon.faTrash}, `;
        strHtml += `faUser:${clsIcon.faUser}, `;
        strHtml += `faPlus:${clsIcon.faPlus}, `;

        testIconHtml.innerHTML = strHtml;
      }
      return {
        getUser,
        UserId,
        UserName,
        testIconHtml,
      };
    },
  });
</script>
<style scoped>
  .myInput {
    border: 2px;
    border-color: #0080ff;
  }
</style>
