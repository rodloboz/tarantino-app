<template>
  <nav>
    <div class="nav-left">
      <span>Tarantino Movie Quotes</span>
    </div>
    <div class="nav-right">
      <div class="nav-item">
        <i class="el-icon-upload2"></i>
      </div>
        <div class="nav-item">
          <i class="el-icon-plus"></i>
        </div>
      </div>
  </nav>
</template>

<style lang="scss">
  nav {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);

    .nav-left {
      flex-grow: 1;
      margin-left: 30px;
    }

    .nav-right {
      display: flex;
      flex-direction: row;
      margin-right: 30px;
    }

    .nav-item {
      margin-left: 15px;
    }
  }

</style>
