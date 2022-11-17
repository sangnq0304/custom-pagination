<template>
  <div id="app">
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="10"
      :total="100"
      :pager-count="isMobile ? 5 : 7"
      :layout="isMobile ? 'pager' : ' prev, pager, next'"
      ref="pagination"
    />

    <div v-if="isMobile" class="group-button">
      <el-button @click="handlePrev">
        <i class="el-icon-arrow-left" /> 前のページへ
      </el-button>
      <el-button @click="handleNext">
        次のページへ <i class="el-icon-arrow-right" />
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
    },

    handlePrev() {
      this.$refs.pagination.prev();
    },

    handleNext() {
      this.$refs.pagination.next();
    },

    onResize() {
      this.isMobile = window.innerWidth < 767.98;
    },
  },

  data() {
    return {
      currentPage1: 6,
      isMobile: false,
    };
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.el-pagination {
  ::v-deep {
    .number,
    button {
      background-color: #fff;
      color: #242424;
      height: 32px;
      line-height: 32px;
      min-width: unset;
      width: 32px;
      font-size: 14px;
      font-weight: 300;
      border-radius: 2px;
      border: 1px solid #d1d1d1;
      margin: 0 4px;
      padding: 0;

      &:hover,
      &.active {
        color: #e5413c;
        border-color: #e5413c;
      }

      &.active {
        font-weight: 600;
      }
    }

    .el-icon.more {
      height: 32px;
      line-height: 32px;
      min-width: unset;
      width: 32px;
      font-size: 14px;

      &:hover {
        color: #242424;
      }
    }

    button:disabled {
      color: #e3e3e3;
      cursor: unset;

      &:hover {
        color: #e3e3e3;
        background-color: #fff;
        border-color: #d1d1d1;
      }
    }
  }
}

.group-button {
  margin-top: 20px;

  .el-button {
    border: 1px solid #d1d1d1;
    color: #000;

    &:hover {
      color: initial;
    }

    i {
      font-weight: 600;
      font-size: 16px;
    }
  }
}
</style>
