<!-- 
Callout Component
Example:
<Callout icon="fas fa-ban" size="giant" color="red"> <slot> </Callout>
-->

<template>
	<div class="callout" v-bind:class="size + ' ' + color">
		<i class="callout-icon" :class="icon"></i>
		<i class="callout-icon spacer" :class="icon" aria-hidden="true"></i>
		<div class="callout-body">
			<!-- Callout body content -->
			<slot></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: "Callout",
	mixins: [
	],
	components: {
	},
	props: {
		// Predefined callout size classes
		size: {
			// `'small'`, `'big'`, `'giant'`, `'fit'`
			type: String,
			required: false,
   			default: "",
		},
		// Color variable for callout
		color: {
			type: String,
			required: false,
   			default: "primary",
		},
		// Font awesome icon class for left icon
		icon: {
			type: String,
			required: false,
   			default: null,
		},
	},
	data() {
		return {
		};
	},
	created() {

	},
	mounted(){
	},
	methods: {
	}	
};	

</script>

<style lang="scss">
	

	.callout{
		display: flex;
		width: 100%;
		max-width: var(--maxWidth);
		box-sizing: border-box;
		padding: 5px 5px 5px 5px;
		border-radius: calc(var(--borderRadius) * 1.5);
		position: relative;
		background-color: var(--blue);
		border: 1px solid rgba(125,125,175,0.125);
		color: var(--blueText);

		// Icon
		.callout-icon{
			height: 100%;
			min-height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			box-sizing: border-box;
			font-size: 24px;
			color: var(--blueText);
			padding: 8px 14px;
			position: absolute;
			top: 0;
			left: 0;
			margin-left: 5px;

			&.spacer{
				position: relative;
				visibility: hidden;
			}
		}

		// Text
		.callout-body{
			flex-grow: 3;
			padding: 15px 0 15px 0;
			display: flex;
			flex-direction: column;
			font-size: 14px;
			font-weight: 500;
			justify-content: center;
		}


		// Colors
		&.red{
			background-color: var(--red);
			color: var(--redText);
			.callout-icon{
				color: var(--redText);
			}
			a{
				color: var(--redText);
				&:hover{
					color: var(--redText);
				}
			}
		}
		// Orange
		&.orange{
			background-color: var(--orange);
			color: var(--orangeText);
			.callout-icon{
				color: var(--orangeText);
			}
			a{
				color: var(--orangeText);
				&:hover{
					color: var(--orangeText);
				}
			}
		}
		// Purple
		&.purple{
			background-color: var(--purple);
			color: var(--purpleText);
			.callout-icon{
				color: var(--purpleText);
			}
			a{
				color: var(--purpleText);
				&:hover{
					color: var(--purpleText);
				}
			}
		}
		// Pink
		&.pink{
			background-color: var(--pink);
			color: var(--pinkText);
			.callout-icon{
				color: var(--pinkText);
			}
			a{
				color: var(--pinkText);
				&:hover{
					color: var(--pinkText);
				}
			}
		}
		// Green
		&.green{
			background-color: var(--green);
			color: var(--greenText);
			.callout-icon{
				color: var(--greenText);
			}
			a{
				color: var(--greenText);
			}
		}
		// Yellow
		&.yellow{
			background-color: var(--yellow);
			color: var(--yellowText);
			.callout-icon,
			.callout-body{
				color: var(--yellowText);
			}
			a{
				color: var(--yellowText);
			}
		}
		// Grey
		&.grey{
			background-color: var(--grey);
			color: var(--greyText);
			.callout-icon{
				color: var(--greyText);
			}
			a{
				color: var(--greyText);
				&:hover{
					color: var(--greyText);
				}
			}
		}

		// Sizing
		// small means lil smaller icon and smaller text
		&.small{
			padding: 0 0 0 0;
			border-radius: var(--borderRadius);

			.callout-icon{
				font-size: 18px;
			}
			.callout-body{
				padding: 10px 0 10px 0;
				letter-spacing: 0px;
			}
		}
		// big means bigger icon and bigger text
		&.big{
			padding: 20px 0 20px 0;
			border-radius: 25px;
			border-radius: calc(var(--borderRadius) * 2.5);

			@media (max-width: $screenSM) {
				padding: 20px 0 20px 0;
			}

			.callout-icon{
				font-size: 42px;
				padding: 0 24px 0 20px;
				@media (max-width: $screenSM) {
					font-size: 34px;
				}	
			}
		}
		// Giant makes giant transparent icon
		&.giant{
			padding: 30px 20px 30px 50px;
			border-radius: calc(var(--borderRadius) * 3.5);

			.callout-icon{
				font-size: 82px;
				width: 100px;
				opacity: 0.2;
				margin-left: 15px;
				pointer-events: none;
				&.spacer{
					display: none;
				}
			}
		}
		// Unset max width
		&.wide{
			max-width: unset;
			p{
				max-width: unset;
			}
		}
		
		
	}

</style>