<script lang="ts">
	type Props = {
		verification: { code: string };
	};
	let { verification = { code: '012345' } }: Props = $props();
</script>

<html lang="en">
	<head>
		<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
	</head>
	<body>
		<table>
			<tbody>
				<tr style="width: 100%">
					<td>Sign Up</td>
				</tr>
				<tr style="width: 100%">
					<td>Code:</td><td>{verification.code}</td>
				</tr>
			</tbody>
		</table>
	</body>
</html>
