<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Users </h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th style="width: 10px">STT</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th style="width: 40px">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    Tuyen
                                </td>
                                <td>
                                    adadada
                                </td>
                                <td>
                                    <a href=""> <i class="fa fa-edit"></i></a>
                                    /
                                    <a href=""> <i class="fa fa-trash"></i></a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer clearfix">
                        <ul class="pagination pagination-sm m-0 float-right">
                            <li class="page-item"><a class="page-link" href="#">«</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">»</a></li>
                        </ul>
                    </div>
                </div>
                <!-- /.card -->
            </div>
            <!-- /.col -->
        </div>
    </div>

</template>

<script>
	export default {
		name: "UserComponent"
	}
</script>

<style scoped>

</style>
